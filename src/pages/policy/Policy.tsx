import React from 'react';
import {Content, PolicyWrapper, Title, Text, Ol, Li} from "./style";
import {Container} from "../../common/style/Container";
import {Link} from 'react-router-dom';
import {ROUTS} from "../../common/constans/routs";

export const Policy = () => {
    return (
        <PolicyWrapper>
            <Container>
                <Content>
                    <Title>Data Processing Policy</Title>
                    <Text>
                        The Data Processing Policy (hereinafter referred to as the "Policy") is developed in accordance
                        with paragraph 3, clause 3, article 17 of the Law of the Republic of Belarus dated May 7, 2021,
                        No. 99-З "On Personal Data Protection" for the purpose of ensuring the protection of personal
                        data, rights, and freedoms of individuals (hereinafter referred to as "Users") during the
                        processing of their personal data by LLC "Veon-Consult," Unified State Register of Legal
                        Entities and Individual Entrepreneurs (UNP) 193082231, located at 57B Surganova Street, Office
                        187, Minsk, 220068 (hereinafter referred to as the "Company"), which may obtain such data when
                        using the website <Link to={ROUTS.HOME}>veon-tech.by</Link> (hereinafter referred to as the
                        "Website"), and/or the data of a third party on behalf of and in the interest of whom the User
                        acts while using the Website, including when filling out forms posted on the Website.
                        The text of this Policy is posted by the Company on its website on the Internet at the following
                        address: <Link to={ROUTS.POLICY}>veon-tech.by/privacy</Link> in accordance with clause 4,
                        article 17 of the Law of the Republic of Belarus dated May 7, 2021, No. 99-З "On Personal Data
                        Protection."
                    </Text>
                    <Text>
                        <span>Our contacts:</span>
                    </Text>
                    <Text>
                        LLC "Veon-Consult," UNP 193082231, located at 57B Surganova Street, Office 187, Minsk, 220068
                        support@veon-tech.by.
                    </Text>
                    <ol>
                        <li>GENERAL PROVISIONS
                            <ol>
                                <li>
                                    <span>Personal data</span> means any information relating to an identified or identifiable individual, that is, a person who can be directly or indirectly identified (in particular, by surname, first name, patronymic, date of birth, identification number, or by one or several characteristics specific to their physical, psychological, mental, economic, cultural, or social identity).
                                </li>
                                <li>
                                    <span>Data processing by the Company</span> includes any action or set of actions performed with personal data, including collection, systematization, storage, modification, use, depersonalization, blocking, dissemination, provision, or deletion of personal data.
                                </li>
                                <li>
                                    The Company processes personal data both using automation tools and without using automation tools.
                                </li>
                                <li>
                                    The User may give consent to the processing of personal data by filling out forms on the Website by marking the corresponding checkbox and by other means provided by the Policy.
                                </li>
                                <li>
                                    The processing of personal data is limited to achieving specific, previously declared, and lawful purposes. The Company does not process personal data in a manner incompatible with the purposes of their processing.
                                </li>
                            </ol>
                        </li>
                        <li>COMPOSITION OF PERSONAL DATA, PURPOSES, LEGAL BASIS, AND DATA RETENTION PERIOD
                            <ol>
                                <li>
                                    The Company is the data controller and processes the following personal data of Website Users:
                                    <ol>
                                        <li>
                                            Surname, first name, patronymic, position, company name represented by the User, email address, contact phone number for the purpose of processing User's requests, concluding agreements with the User or companies/individuals on behalf of whom the User acts, providing services/performance of work, communication regarding projects, and providing access to corporate systems for project implementation. The retention period for personal data is 6 months from the date of termination or termination of the agreement, or other periods established by the legislation of the Republic of Belarus.
                                        </li>
                                        <li>
                                            Surname, first name, patronymic, position, company name represented by the User, email address, contact phone number for the purpose of sending commercial offers, advertising and informational messages based on the User's consent when filling out the form. The storage period for personal data provided for mailing is limited to the completion of marketing campaigns or the User's unsubscribe at any time by clicking the "Unsubscribe" link in the email or by sending a notification to support@veon-tech.by.
                                        </li>
                                        <li>
                                            Surname, first name, patronymic, phone number, email address, any information provided by the User in a resume for the purpose of considering the candidacy for the respective Company's vacancy. The legal basis for processing personal data is the consent to data processing expressed when filling out the "Send resume" form. The storage period for data provided for employment is 12 months from the date of the decision to hire or refuse employment.
                                        </li>
                                        <li>
                                            Surname, first name, patronymic, phone number, email address, content (text) of the inquiry when filling out the feedback form, sending an email, or contacting by phone for the purpose of responding to the User's inquiry. The legal basis for processing such data is legitimate interest. The storage period for personal data does not exceed the time necessary to respond to the inquiry and may also be extended until the expiration of the statutory limitation period.
                                        </li>
                                        <li>
                                            De-identified technical data from User devices (information about user actions on the Website, IP addresses, location data, cookie files) collected, including through Yandex Metrika analytics services, <a target={'_blank'} href="https://support.google.com/analytics/answer/7667196?hl=en&roistat_visit=311498">Google Analytics</a>, for the purpose of ensuring the effective operation of the Website based on legitimate interest and User consent, expressed by continuing to use the Website after being notified of data usage. The storage period for automatically collected data during User's visit to the Website does not exceed 14 months. The User is informed that more detailed information about cookie files and their principles of operation can be found on the resource <a target={'_blank'} href="https://www.aboutcookies.org/?roistat_visit=311498">aboutcookies.org</a>.
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>USER RIGHTS AS A PERSONAL DATA SUBJECT
                            <ol>
                                <li>The user has the right to:
                                    <ol>
                                        <li>
                                            withdraw consent to the processing of personal data;
                                        </li>
                                        <li>receive information about the processing of their personal data;
                                        </li>
                                        <li>modify personal data;</li>
                                        <li>receive information about the provision of personal data to third parties;
                                        </li>
                                        <li>request the cessation of processing of personal data and/or their deletion;
                                        </li>
                                        <li>challenge actions (inactions) and decisions of the Company related to the processing of personal data.
                                        </li>
                                    </ol>
                                </li>
                                <li>To exercise their rights specified in clause 3.1. of the Policy, the User must submit a respective request to the Company using one of the following methods:
                                    <ol>
                                        <li>in writing to the address: Republic of Belarus, Minsk, 220068, Surganova Street, 57B, office 187;
                                        </li>
                                        <li>in the form through which consent was obtained.</li>
                                    </ol>
                                </li>
                                <Text>
                                    The personal data subject's request must include their surname, given name, patronymic (if applicable), address, date of birth, identification number or document number verifying their identity (if no identification number is available), in cases where this information was provided when giving consent or when personal data processing is carried out without the consent of the personal data subject; a statement of the requirements, personal signature, or electronic digital signature.
                                </Text>
                                <Text>
                                    When withdrawing consent to the processing of personal data, the User also declines to receive advertising and informational newsletters.
                                </Text>
                                <li>
                                    The Company undertakes to respond to the User's request within the timeframes established by Belarusian legislation.
                                </li>
                            </ol>
                        </li>
                        <li>CONDITIONS FOR PROCESSING PERSONAL DATA AND THEIR TRANSFER TO THIRD PARTIES
                            <ol>
                                <li>Personal data is kept confidential unless the User voluntarily provides information about themselves for public access by an unlimited number of persons. In this case, the User agrees that a certain portion of their personal data becomes publicly available.
                                </li>
                                <li>The Company may transfer the User's personal information to third parties in the following cases:
                                    <ol>
                                        <li>The User has given consent to such actions.</li>
                                        <li>The transfer is necessary for the performance of a specific agreement or contract between the Company and the User.</li>
                                        <li>The transfer is required by Belarusian or other applicable legislation within the framework of the procedures established by law.</li>
                                    </ol>
                                </li>
                                <li>The Company may transfer the User's personal data to the following third parties for the purposes specified in section 2.1 of the Policy:
                                    <Text>Yandex.Metrica - a web analytics service provided by Yandex LLC. Address: 16, Leo Tolstoy Street, Moscow, 119021, Russia. <a target="_blank" href="https://yandex.com/legal/privacy/">Yandex Privacy Policy</a>.</Text>
                                    <Text>Google Analytics - a web analytics service provided by Google LLC. Address: Google, Google Data Protection Office, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. <a target="_blank" href="https://policies.google.com/privacy">Google Privacy Policy</a>.</Text>
                                    <Text>Huntflow - a candidate database management service provided by Huntflow LLC. Address: 2, Building 2, Room 27A, Novodmitrovskaya Street, Butyrsky District, Moscow, 127015, Russia. <a target="_blank" href="https://huntflow.ru/docs/privacy-policy">Huntflow Privacy Policy</a>.</Text>
                                    <Text>Pipedrive - a customer relationship management service provided by Pipedrive Florida. Address: 490 1st Ave South, Suite 800, St. Petersburg, FL 33701, USA. <a target="_blank" href="https://www.pipedrive.com/en/privacy">Pipedrive Privacy Policy</a>.</Text>
                                </li>
                                <li>The Company takes necessary and sufficient organizational and technical measures to protect personal data from unauthorized access and other unlawful actions regarding personal data during their processing.</li>
                            </ol>
                        </li>
                        <li>FINAL PROVISIONS
                            <ol>
                                <li>The User can obtain any clarifications regarding the processing of their personal data by contacting the Company via email at support@veon-tech.by.</li>
                                <li>All suggestions or questions regarding this Privacy Policy should be directed to the email address support@veon-tech.by.</li>
                                <li>The current version of the Policy is freely available on the Internet at the address <a href="veon-tech.by/privacy/">veon-tech.by/privacy/</a>.</li>
                                <li>By using the Website, submitting data, requests, resumes, filling out forms, or applications, the User CONFIRMS THAT THEY HAVE READ THE POLICY AND EXPRESS THEIR VOLUNTARY, INFORMED, AND UNAMBIGUOUS CONSENT to the collection, processing, distribution, provision, and storage of the personal data specified therein, carried out both without the use of automation tools and with the use of automation tools, within the specified period.</li>
                            </ol>
                        </li>
                    </ol>
                </Content>
            </Container>
        </PolicyWrapper>
    );
}

