import React from 'react';

import { formatPhone, unformatPhone } from '../helpers/helpers.js';

const Contact = (props) => {

    function openCalendlyWidget(link) {
        if (!link) {
            link = 'https://calendly.com/teamrc-1/15min';
        }
        Calendly.showPopupWidget(link);
        return false;
    }

    if (props.show_lo_profile) {
        return (
            <div className='contact-wrapper'>
                {props.show_lo_profile &&
                    <div className='col-md-2'>
                        {props.loProfile.hasOwnProperty('banker_headshot') && props.loProfile.banker_headshot != '' ?
                            <img className='banker-headshot' alt="LO Headshot" src={`data:image/png;base64,${props.loProfile.banker_headshot}`} />
                            :
                            <img className='banker-headshot' alt="LO Headshot" src={`data:image/png;base64,${props.loProfile.banker_headshot}`} />
                        }

                        <p className='banker-name'>{props.loProfile.first_name} {props.loProfile.last_name}</p>

                        {props.loProfile.hasOwnProperty('cell_phone') && props.loProfile.cell_phone != '' &&
                            <a href={"tel:" + (props.loProfile.cell_phone)} className='banker-cell'>{props.loProfile.cell_phone}</a>
                        }

                        {props.loProfile.hasOwnProperty('email') && props.loProfile.email != '' &&
                            <a href={"mailto:" + (props.loProfile.email)} className='banker-email'>{props.loProfile.email}</a>
                        }
                    </div>
                }

                {props.show_calendly && props.loProfile.hasOwnProperty('calendly_link') && props.loProfile.calendly_link &&
                    <div className='btn tmsblue calendly' onClick={() => openCalendlyWidget(props.loProfile.calendly_link)}>Schedule an appointment</div>
                }
            </div>
        )
    }
    else {
        if (props.show_calendly && props.loProfile.hasOwnProperty('calendly_link') && props.loProfile.calendly_link) {
            return (
                <div className='contact-wrapper'>
                    {props.show_calendly && props.loProfile.hasOwnProperty('calendly_link') && props.loProfile.calendly_link &&
                        <div className='btn tmsblue calendly' onClick={() => openCalendlyWidget(props.loProfile.calendly_link)}>Schedule an appointment</div>
                    }
                </div>
            )

        }
    }

    return null;
}

export default Contact;