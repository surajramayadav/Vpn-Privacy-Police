import React from 'react'

const PrivacyPage = () => {


    const data = [
        {
            title: `PRIVACY POLICY`,
            content: <>This website under the domain of <b>https://free-vpn-app.vercel.app/</b> and all other sub-domains under the
                top level URL are operated by <b>Mahan Bharat</b> Co Ltd, hereby referred to as “Free Vpn”
                We take your privacy very seriously and we ask that you read this privacy policy carefully as it
                contains important information on:
                <li> the personal information we collect about you</li>
                <li> what we do with your information, and</li>
                <li> who your information might be shared with.</li>
                We may change this privacy policy from time to time. You should check this policy occasionally
                to ensure you are aware of the most recent version that will apply each time you access this
                website.</>
        },
        {
            title: `Who we are`,
            content: <>Free Vpn ('we' or 'us') are a 'data controller' for the purposes of the Personal Data Protection
                Act (PDPA) and any subsequent Inida data protection legislation and we are responsible for, and
                control the processing of, your personal information.</>
        },
        {
            title: `Who does this privacy policy apply to?`,
            content: <>This privacy policy applies to visitors to our online ordering website and those who contact us
                via our website or any of the contact methods specified on it or place an order for a product(s).</>
        },
        {
            title: `What information do we collect and process?`,
            content: <>Personal information provided by you
                During the course of accessing our website, contacting us, or otherwise dealing with us, you
                may provide us with a range of personal data which we will use in the course of our business.
                This personal information may include:
                <li> Your name or another unique identifier;</li>
                <li> Your address, lat/long information;</li>
                <li> Your age and/or date of birth;</li>
                <li> Your contact details (which may include your landline telephone number, mobile</li>
                number, and/or email address);
                <li> Payment or other financial details (e.g. payment card information, bank information);</li>
                <li> Professional information (e.g. job title and/or type, professional qualifications, industry);</li>
                and
                <li> Other related information.</li></>
        },
        {
            title: `Information we collect automatically`,
            content: <>Our website may collect certain information about you automatically (such as your IP address,
                geographical location, browser type and version, operating system).</>
        },
        {
            title: `Personal information provided by third parties`,
            content: <>Occasionally we may receive information about you from other sources (such as our suppliers,
                customers, or group companies), which we will add to the information we already hold about
                you in order to help us operate our business effectively.</>
        },
        {
            title: `Personal information about other individuals`,
            content: <>If you give us information on behalf of someone else, you confirm that the other person has
                appointed you to act on his/her behalf and has agreed that you can:
                <li> transfer the personal data and give consent on his/her behalf to the processing of his/her</li>
                personal data;
                <li> receive on his/her behalf any data protection notices;</li>
                <li> give consent to the transfer of his/her personal data abroad; and</li>
                <li> give consent to the processing of his/her sensitive personal data (if applicable).</li></>
        },
        {
            title: `How we use your data and our legal basis for processing your data.`,
            content: <>We may process your data for a variety of reasons, including to:
                <li> display the website and its functionality and enable your interaction with it;</li>
                <li> provide content, communications or information you request;</li>
                <li> fulfill your order for a product and deal with any customer support issues;</li>
                <li> respond to a request, order, enquiry or complaint you may have;</li>
                <li> customize our website and its content to your particular preferences; and</li>
                <li> improve our website and services.</li>
                In some instances, we will rely on your consent to process personal data and where we do this,
                it will be flagged to you at the time.
                When we use your personal information we are required to have a legal basis for doing so.
                There are various different legal bases upon which we may rely, depending on what personal
                information we process and why.
                The legal bases we may rely on include:
                <li> consent: where you have given us clear consent for us to process your personal</li>
                information for a specific purpose;
                <li> contract: where our use of your personal information is necessary for a contract we have</li>
                with you, or because you have asked us to take specific steps before entering into a
                contract;
                <li> legal obligation: where our use of your personal information is necessary for us to</li>
                comply with the law (not including contractual obligations); or
                <li> legitimate interests: where our use of your personal information is necessary for our</li>
                legitimate interests or the legitimate interests of a third party (unless there is a good
                reason to protect your personal information which overrides our legitimate interests).</>
        },
        {
            title: `Storage of your information and who your information might be shared with`,
            content: <>We store your personal data relating to the use of the site and purchase of products on third
                party servers.
                We may disclose your personal data to:
                <li> our online ordering platform merchants to the extent necessary for us to provide you with</li>
                access to purchase products. We will only share your data subject to a contract requiring
                them to process your personal data in accordance with the requirements prescribed by
                data protection law (and they may also transfer your personal data to their
                subcontractors and suppliers to the extent necessary to provide the services to us for
                your benefit);
                <li> other companies within our group to the extent that there is a legitimate interest in doing</li>
                so to support our business aims;
                <li> our other agents and service providers, to the extent that they require access to the data</li>
                in order to provide goods/services to us, in which case they will be bound by a contract
                requiring them to process personal data in accordance with the requirements prescribed
                by data protection law;
                <li> law enforcement agencies in connection with any investigation to help prevent unlawful</li>
                activity; and
                <li> a third party purchaser if we sell our business, in which case, customer and user</li>
                information will be a transferred asset.
            </>
        },
        {
            title: `Keeping your data secure`,
            content: <>We will use technical and organizational measures to safeguard your personal data in
                accordance with the law. While we will use all reasonable efforts to safeguard your personal
                data, you acknowledge that the use of the internet is not entirely secure and for this reason we
                cannot guarantee the security or integrity of any personal data that are transferred from you or
                to you via the internet. If you have any particular concerns about your information, please
                contact us (see ‘How to contact us’ below).</>
        },
        {
            title: `Transfers of your information out of India`,
            content: <>We may need to transfer your personal data outside India (for example to Facebook to
                process a facebook login). We will only do this if appropriate safeguards are placed in
                accordance with data protection legislation.</>
        },
        {
            title: `How long do we keep your personal information?
            `,
            content: <>We keep your personal information for as long as we need to for the purposes for which it was
                collected or (if longer) for any period for which we are required to keep personal information to
                comply with our legal and regulatory requirements.</>
        },
        {
            title: `How can you delete you personal information ?            `,
            content: <>You may request your account deletion request via our website at
                <b> ankit.rama.yadav@gmail.com</b></>
        },
        {
            title: `Important Note about account deletion`,
            content: <>Please note that Free Vpn uses a multi-channel
                user login system. In case you have used multiple brands across multiple channels (such as
                LINE, Google, Web, Facebook) – please list all the potential email addresses and phone
                number(s) that you have used to access our services. Please be very specific in your message,
                as to which specific account / all account(s) are you requesting your deletion for. In case your
                email is the same across all channels, your account information is automatically unified in our
                system. In this case, requesting to delete a “Facebook account” may result in irreversible
                deletion of all related accounts. Once deleted, your account information will be forever lost to
                the darkness of the universe. Upon receiving your request, you account will be immediately
                deactivated and all personal information will be removed in 5-7 business days</>
        },
        {
            title: `What rights do you have?`,
            content: <>You are responsible for ensuring that information you provide to us is accurate, complete and
                up-to-date. You can review and change your information by contacting us.
                You have a number of rights in relation to your personal data, these include the right to:
                <li> find out how we process your data;</li>
                <li> request that your personal data is corrected if you believe it is incorrect or inaccurate;</li>
                <li> obtain restriction on our, or object to, processing of your personal data;</li>
                <li> if we are relying on consent, you can withdraw your consent to our processing of your</li>
                personal data (including any direct marketing);
                <li> if we are relying on legitimate interests for direct marketing, you can object to receiving</li>
                such direct marketing;
                <li> obtain a copy of the personal data we process concerning you. We will take steps to</li>
                verify your identity before responding to your request. Once we have verified your
                identity we will respond as soon as possible and in any event within one month.
                If you would like to exercise any of your rights or find out more, please contact us via
                <b>  ankit.rama.yadav@gmail.com</b></>
        },
        {
            title: `Changes to this Privacy Policy`,
            content: <>We may change this Privacy Policy from time to time, and if we do so we will highlight any
                changes to these pages. If you continue to access or use our services after notified changes
                have come into effect, you will have agreed to the revised policy.</>
        },
        {
            title: `How to contact us`,
            content: <>If you have any questions about this privacy policy or the information we hold about you, please
                contact us at :  <b> ankit.rama.yadav@gmail.com</b></>
        }
    ]



    return (
        <div style={{ backgroundColor: "#e5e5e5", padding: "2rem 3rem" }}>
            <h1>Privacy Policy</h1>
            <p>Last updated: June 30, 2023</p>
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>.</p>
            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h2>Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
                <li>
                    <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                </li>
                <li>
                    <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                </li>
                <li>
                    <p><strong>Application</strong> refers to Free Vpn, the software program provided by the Company.</p>
                </li>
                <li>
                    <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Free Vpn.</p>
                </li>
                <li>
                    <p><strong>Country</strong> refers to: Maharashtra,  India</p>
                </li>
                <li>
                    <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </li>
                <li>
                    <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                </li>
                <li>
                    <p><strong>Service</strong> refers to the Application.</p>
                </li>
                <li>
                    <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                </li>
                <li>
                    <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                </li>
                <li>
                    <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
            </ul>
            <h1>Collecting and Using Your Personal Data</h1>
            <h2>Types of Data Collected</h2>
            <h3>Personal Data</h3>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul>
                <li>Usage Data</li>
            </ul>
            <h3>Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
            <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
                <li>
                    <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                </li>
                <li>
                    <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                </li>
                <li>
                    <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                </li>
                <li>
                    <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                </li>
                <li>
                    <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                </li>
                <li>
                    <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                </li>
                <li>
                    <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                </li>
                <li>
                    <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                </li>
            </ul>
            <p>We may share Your personal information in the following situations:</p>
            <ul>
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>
            <h2>Retention of Your Personal Data</h2>
            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
            <h2>Transfer of Your Personal Data</h2>
            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
            <h2>Delete Your Personal Data</h2>
            <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
            <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
            <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
            <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
            <h2>Disclosure of Your Personal Data</h2>
            <h3>Business Transactions</h3>
            <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
            <h3>Law enforcement</h3>
            <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            <h3>Other legal requirements</h3>
            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
            </ul>
            <h2>Security of Your Personal Data</h2>
            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
            <h1>Children's Privacy</h1>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
            <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
            <h1>Links to Other Websites</h1>
            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
            <h1>Changes to this Privacy Policy</h1>
            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            <h1>Contact Us</h1>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul>
                <li>By email: surajramayadav@gmail.com</li>
            </ul>
        </div>
    )
}

export default PrivacyPage