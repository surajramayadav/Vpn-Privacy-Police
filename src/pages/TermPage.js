import React from 'react'

const TermPage = () => {

    const data = [
        {
            title: "LEGAL AGREEMENT",
            content: <>These are the terms and conditions (“Terms”) that govern your use of this website.
                This forms a legal agreement between you, the user of the website and purchaser of any
                Product(s), and <b>Mahan Bharat</b> Co Ltd ( “we”, “us”, “our”) and you must agree to these Terms in
                order to purchase a Product(s)
                If you do not accept these Terms, you should not make any further use of this website and you
                will not be able to purchase a Product(s).</>
        },
        {
            title: `ORDERING A PRODUCT(S)`,
            content: <>The website enables you to purchase a Product(s) from our merchants, NOT us. You should
                ensure that, prior to submitting an order, you review the details of the Product(s), including any
                conditions and exclusions of the Product(s). Those conditions and exclusions apply in addition
                to these Terms.
                Please check your order carefully before submitting it. You can correct errors before submitting
                the order. Submission of the order constitutes an offer to purchase the Product(s) from us,
                subject to these Terms. You undertake that all details you provide are correct, that the payment
                card or bank account is your own and that there are sufficient funds to cover the cost of the
                Product(s) ordered.
                We may contact you to say that we do not accept your order. This is typically where the
                Product(s) are not available, we cannot authorize your payment, you are not eligible to purchase
                the Product(s), or there has been a mistake in the pricing or description of the Product(s).
                We will only accept your order when we email you to confirm this. At this point, a binding legal
                contract will be in place between you and the merchant. You should check that the details in the
                confirmation are correct and notify us immediately if there is any error.</>
        },
        {
            title: `PAYMENT`,
            content: <>We accept payment by credit or debit card (Visa, Mastercard, or American Express) or QR
                Cash Promptpay. Payments are processed via our nominated third party payment processor.
                Your payments are DIRETLY remitted to the merchant you are purchasing food from. You are
                NOT paying us. We will not issue the Product(s) to you unless and until full payment is received. If we are
                unable to authorize your payment, we will use reasonable efforts to notify you and give you the
                opportunity to rectify the issue. If we are unable to do so, we will cancel the order.</>
        },
        {
            title: `ISSUING & DELIVERING PRODUCT(S)`,
            content: <>We, or our nominated third party logistics (3PL) providers shall deliver the Product(s) to you at
                the delivery address specified in the order. This is typically done within one (1) hour of us
                confirming acceptance of your order under normal weather conditions.
                If you do not receive your Product(s) within two (2) hours of our confirmation, you may contact
                us via the details shown on the website or in the confirmation, and we will do our best to
                investigate and assist.
                All Products are non-refundable and non-transferable unless otherwise agreed by the merchant. </>
        },
        {
            title: `LIABILITY`,
            content: <>Nothing in this agreement shall limit or exclude the Seller’s liability for death or personal injury
                caused by its negligence, fraud or fraudulent misrepresentation, or in relation to any liability
                which by law may not be limited or excluded.
                This website and the Products are available for personal use only and accordingly, the Seller
                shall not be liable for any business losses, including any loss of profits, business, revenue,
                goodwill, savings, anticipated savings (whether direct or indirect). The Seller shall not be liable
                for any indirect or consequential losses howsoever caused.</>
        },
        {
            title: `INTELLECTUAL PROPERTY RIGHTS`,
            content: <>The website and all content, images and materials published on it is protected by copyright and
                other intellectual property rights and laws. You may access and use the website for personal
                purposes only and not for any other purpose. None of the content may be downloaded, copied,
                reproduced, transmitted, sold or distributed for any commercial purposes without our prior
                written consent.</>
        },
        {
            title: `ASSIGNATION`,
            content: <>You may not assign, sub-licence or otherwise transfer any of your rights under these Terms
                without our prior written consent. Your privacy is important to us and we are committed to maintaining the privacy of any personal
                information received from you. We comply with Inidan’s data protection legislation, including
                the Personal Data Protection Act (PDPA).
                By using our website and purchasing a Product(s), you agree that you have read and accepted
                our privacy policy, available at <b>https://ondc-food.netlify.app/</b> .
            </>
        },
        {
            title: `How can you delete you personal information ?`,
            content: <>You may request account deletion via <b>https://ondc-food.netlify.app/</b>  </>
        },
        {
            title: `Important Note about account deletion`,
            content: <>Please note that ondc uses a multi-channel
                user login system. In case you have used multiple brands across multiple channels (such as
                LINE, Google, Web, Facebook) – please list all the potential email addresses and phone
                number(s) that you have used to access our services. Please be very specific in your message,
                as to which specific account / all account(s) are you requesting your deletion for. In case your
                email is the same across all channels, your account information is automatically unified in our
                system. In this case, requesting to delete a “Facebook account” may result in irreversible
                deletion of all related accounts. Once deleted, your account information will be forever lost to
                the darkness of the universe. Upon receiving your request, you account will be immediately
                deactivated and all personal information will be removed in 5-7 business days.</>
        },
        {
            title: `GENERAL`,
            content: <>Whilst reasonable efforts are used to ensure that the website is complete and accurate and
                made available at all times, the website is provided “as is” and without any warranties or
                guarantees. In particular, we do not warrant that the website will always be available or will be
                error-free. We may alter or revoke access to the website at any time.
                If any or the provisions of these Terms are held invalid, illegal or unenforceable for any reason
                by any court or competent jurisdiction, such provision shall be severed and the remainder of the
                provisions hereof shall continue in full force and effect as if the Terms had been accepted with
                the invalid illegal or unenforceable provision eliminated.
                We shall not be liable for any delay or failure to perform any of the obligations under these
                Terms if such delay or failure is due to any cause or circumstances beyond our reasonable
                control.
                We may vary these terms and conditions from time to time by publishing the varied terms on the
                website, provided that this shall not apply to any Products already purchased.
                These terms and our contract with you shall be governed by and construed in accordance with
                the laws of Inidan. Any disputes arising out of or in connection with this agreement shall be
                subject to the non-exclusive jurisdiction of the Inidan courts.</>
        }
    ]
    console.log('data', data)

    return (
        <div style={{ backgroundColor: "#e5e5e5", padding: "2rem 3rem" }}>
            <h1 style={{ marginTop: 100 }}>Terms and Conditions</h1>
            <p>Last updated: June 30, 2023</p>
            <p>Please read these terms and conditions carefully before using Our Service.</p>
            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h2>Definitions</h2>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul>
                <li>
                    <p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Free Vpn</p>
                </li>
                <li>
                    <p><strong>Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</p>
                </li>
                <li>
                    <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                </li>
                <li>
                    <p><strong>Country</strong> refers to: Maharashtra,  India</p>
                </li>
                <li>
                    <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Free Vpn.</p>
                </li>
                <li>
                    <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </li>
                <li>
                    <p><strong>Service</strong> refers to the Application.</p>
                </li>
                <li>
                    <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank">Free Terms and Conditions Generator</a>.</p>
                </li>
                <li>
                    <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                </li>
                <li>
                    <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
            </ul>
            <h1>Acknowledgment</h1>
            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
            <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
            <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
            <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
            <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
            <h1>Links to Other Websites</h1>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
            <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
            <h1>Termination</h1>
            <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
            <p>Upon termination, Your right to use the Service will cease immediately.</p>
            <h1>Limitation of Liability</h1>
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
            <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
            <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
            <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
            <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
            <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
            <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
            <h1>Governing Law</h1>
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
            <h1>Disputes Resolution</h1>
            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
            <h1>For European Union (EU) Users</h1>
            <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
            <h1>United States Legal Compliance</h1>
            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
            <h1>Severability and Waiver</h1>
            <h2>Severability</h2>
            <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
            <h2>Waiver</h2>
            <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
            <h1>Translation Interpretation</h1>
            <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
                You agree that the original English text shall prevail in the case of a dispute.</p>
            <h1>Changes to These Terms and Conditions</h1>
            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
            <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
            <h1>Contact Us</h1>
            <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
            <ul>
                <li>By email: surajramayadav</li>
            </ul>
        </div>
    )
}

export default TermPage