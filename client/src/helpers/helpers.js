import CryptoJS from 'crypto-js';
import { jsPDF } from "jspdf";
import { ACCEPTED_DECISION, DENIED_DECISION, NOT_QUALIFIED_DECISION, AUTOMATED_INELIGIBLE } from './constants.js';

export const validateStepRequired = (step, formData) => {
    if (step.hasOwnProperty('conditions')) {
        return evaluateConditions(step.conditions, formData);
    }
    return true;
};

const evaluateConditions = (conditions, formData, mode = 'AND') => {
    let result = mode === 'AND';

    for (const key in conditions) {
        if (conditions.hasOwnProperty(key)) {
            let conditionResult;

            if (key === 'AND' || key === 'OR') {
                conditionResult = evaluateConditions(conditions[key], formData, key);
            } else {
                if (typeof conditions[key] === 'object' && conditions[key]['IN']) {

                    const [path, values] = [key, conditions[key]['IN']];
                    const nestedKeys = path.split('.');
                    let currentData = formData;

                    while (nestedKeys.length > 1) {
                        const nestedKey = nestedKeys.shift();
                        if (!(nestedKey in currentData)) {
                            conditionResult = false;
                            break;
                        }
                        currentData = currentData[nestedKey];
                    }

                    if (!conditionResult) {
                        const lastKey = nestedKeys[0];
                        if (!(lastKey in currentData)) {
                            conditionResult = false;
                        } else {
                            const value = currentData[lastKey];
                            if (!Array.isArray(values)) {
                                conditionResult = values.includes(value);
                            } else {
                                conditionResult = values.includes(value);
                            }
                        }
                    }
                } else if (typeof conditions[key] === 'object') {
                    conditionResult = evaluateConditions(conditions[key], formData);
                } else {
                    let nestedKeys = key.split('.');
                    let nestedResult = formData;
                    for (const nestedKey of nestedKeys) {
                        if (!nestedResult.hasOwnProperty(nestedKey)) {
                            nestedResult = undefined;
                            break;
                        }
                        nestedResult = nestedResult[nestedKey];
                    }
                    conditionResult = nestedResult === conditions[key];
                }
            }

            if (mode === 'AND') {
                result = result && conditionResult;
                if (!result) {
                    break;
                }
            } else {
                result = result || conditionResult;
                if (result) {
                    break;
                }
            }
        }
    }

    return result;
}

export const formatCurrency = (amount) => {
    amount = amount.toString().split('.')[0];
    amount = amount.replace(/\D/, "").replace(',', '');

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });
    var i = parseFloat(amount);
    return formatter.format(i);
};

export const formatPhone = (phone) => {
    let formattedPhone = phone.replace(/[^0-9]/g, '');
    formattedPhone = '+1' + formattedPhone.slice(-10);
    formattedPhone = formattedPhone.slice(0, 2) + ' (' + formattedPhone.slice(2, 5) + ') ' + formattedPhone.slice(5, 8) + '-' + formattedPhone.slice(8, 12);
    return formattedPhone;
}

export const unformatPhone = (phone) => {
    let formattedPhone = phone.replace(/[^0-9]/g, '');
    formattedPhone = '+1' + formattedPhone.slice(-10);
    return formattedPhone;
}

export const normalizeInput = (type, value) => {
    if (!value) return value;
    let currentValue = value.replace(/\D/g, '');
    let cvLength = currentValue.length;

    if (type == 'phone_number') {
        if (cvLength < 4) return currentValue;
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
}

export function encryptWithAES(text) {
    const passphrase = "doubleOseven";
    return CryptoJS.AES.encrypt(text, passphrase).toString();
};

export function decryptWithAES(ciphertext) {
    const passphrase = "doubleOseven";
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

export const calculatePropertyTax = (data) => {
    let property_tax = 0;

    if (data.hasOwnProperty('property_tax')) {
        let county_tax = 0;
        if (data.property_tax.hasOwnProperty('averageCountyTax')) {
            county_tax = (data.property_tax.averageCountyTax) / 100;
        }
        else if (data.property_tax.hasOwnProperty('countyTax')) {
            county_tax = (data.property_tax.countyTax) / 100
        }

        property_tax = (parseFloat(county_tax) * parseFloat(data.loan_amount)) / 12;
        property_tax = property_tax.toFixed(2);
        property_tax = parseFloat(property_tax);
    }

    return property_tax;
}

export function generatePDF(formData) {
    return new Promise(async (resolve, reject) => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        var headerOffset = 10;
        var addrOffset = headerOffset + 25;
        var topMargin = headerOffset + 30;
        var cloudImg = new Image();
        cloudImg.src = 'images/tms-cloud.png';
        var logoImg = new Image();
        logoImg.src = 'images/logos/New_TMS_Logo_Standard.png';
        var loPhone = formData.hasOwnProperty('loProfile') ? formData.loProfile.cell_phone : '(844) 259-9172';

        var bgImg = new Image();
        bgImg.src = 'images/Pre_Approval_Letter_Header.png';

        var clientsName = formData.borrower.first_name + " " + formData.borrower.last_name;
        var address = formData.borrower.address_1 + ", " + formData.borrower.city + " " + formData.borrower.state + " " + formData.borrower.zipcode;
        var loanInfo1 = formatCurrency(formData.loan_amount.toString());
        if (formData.credit_decision.dti_decision === NOT_QUALIFIED_DECISION) {
            loanInfo1 = formatCurrency(formData.credit_decision.maxLoanAmount.toString());
        }
        var loanInfo2 = formData.loan_type;
        var para1 = "Congratulations! Your loan request has been pre-qualified based on your submitted information. Final approval is dependent upon the satisfaction of the following conditions:";
        var para2 = "\u2022 Satisfactory copy of fully executed contract with all disclosures.\n\u2022 Satisfactory appraisal on subject property.\n\u2022 Satisfactory verification of employment prior to closing.\n\u2022 Satisfactory verification of credit, income, and assets.";
        var para3 = "This is not a commitment for a loan or for a specific rate. All costs associated with this transaction will be disclosed at application.";
        var para4 = "This pre-qualification expires 60 days from the date of this letter.\nCredit documentation will need to be resubmitted for pre-qualification extension. ";
        var para5 = "If you have any questions, please do not hesitate to call me at " + loPhone + ".";
        var losInfo0 = 'Sincerely,';
        var losInfo1 = formData.hasOwnProperty('loProfile') ? formData.loProfile.first_name + ' ' + formData.loProfile.last_name : 'Total Mortgage Team';
        var losInfo2 = '';
        var losInfo3 = formData.hasOwnProperty('loProfile') ? formData.loProfile.email : 'hello@totalmortgage.com';
        var losInfo4 = formData.hasOwnProperty('loProfile') ? formData.loProfile.cell_phone : '(844) 259-9172';
        var footer1 = "Total Mortgage - 185 Plains Road 3rd Floor, Milford, CT 06461";
        var footer2 = "Main Office: (203) 876.2200 | www.totalmortgage.com";
        const doc = new jsPDF();
        var splitPara1 = doc.splitTextToSize(para1, 220);
        var splitPara2 = doc.splitTextToSize(para2, 220);
        var splitPara3 = doc.splitTextToSize(para3, 220);
        var splitPara4 = doc.splitTextToSize(para4, 220);
        var splitPara5 = doc.splitTextToSize(para5, 220);

        doc.addImage(bgImg, 'PNG', 0, 0, 210, 84, '', 'FAST');
        doc.addImage(cloudImg, 'PNG', 10, headerOffset + 30, 100, 50, '', 'FAST');
        // doc.addImage(logoImg, 'PNG', 20, topMargin+180, 50, 7, '', 'FAST');
        doc.addImage(logoImg, 'PNG', 15, headerOffset + 5, 100, 15, '', 'FAST');
        doc.setFont('Source Sans Pro', 'normal');
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.setFont('Helvetica', 'bold').text(20, addrOffset + 17, clientsName).setFont('Helvetica', 'normal');
        doc.setFontSize(12);
        if (address.length > 25) {
            doc.setFontSize(10);
            doc.text(20, addrOffset + 25, address);
            doc.setFontSize(12);
        }
        else {
            doc.text(20, addrOffset + 25, address);
        }
        doc.setFontSize(20).text(20, addrOffset + 45, loanInfo1);
        doc.setFont('Helvetica', 'bold').setFontSize(15).text(60, addrOffset + 45, loanInfo2);
        doc.setTextColor(34, 67, 99);
        doc.setFont('Helvetica', 'bold').setFontSize(24).text(20, topMargin + 65, "Pre-Qualification Letter").setFontSize(12).setFont('Helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        doc.setFont('Helvetica', 'bold').text(20, topMargin + 80, today).setFont('Helvetica', 'normal');
        doc.text(20, topMargin + 95, splitPara1);
        doc.text(25, topMargin + 115, splitPara2);
        doc.text(20, topMargin + 140, splitPara3);
        doc.text(20, topMargin + 155, splitPara4);
        doc.setFont('Helvetica', 'bold').text(20, topMargin + 170, splitPara5).setFont('Helvetica', 'normal');
        doc.text(20, topMargin + 190, losInfo0).setFont('Helvetica', 'normal');

        doc.setFont('Helvetica', 'bold').text(20, topMargin + 200, losInfo1).setFont('Helvetica', 'normal');
        if (losInfo2 !== '') {
            doc.setTextColor(34, 67, 99);
            doc.text(20, topMargin + 206, losInfo2);
            doc.setTextColor(0, 0, 0);
            doc.text(20, topMargin + 212, losInfo3);
            doc.text(20, topMargin + 218, losInfo4);
        } else {
            doc.setTextColor(0, 0, 0);
            doc.text(20, topMargin + 206, losInfo3);
            doc.text(20, topMargin + 212, losInfo4);
        }
        doc.setFontSize(10);
        doc.setTextColor(119, 119, 119);
        doc.text(105, 280, footer1, 'center');
        doc.text(105, 285, footer2, 'center');
        resolve(doc);
    });
}