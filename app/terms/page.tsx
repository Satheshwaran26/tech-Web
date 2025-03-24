import React from 'react';
import Head from 'next/head';

const TermsAndConditions: React.FC = () => { 
  return (
    <>
      <Head>
        <title>Terms and Conditions - Error Tech</title>
      </Head>
      <div className="bg-[#080808] font-extralight text-lg text-[#d0d0d0] py-24 px-8 sm:px-6 lg:px-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extralight text-[#c1c1c1] mb-6">Terms and Conditions</h1>  
          <p className='text-lg'>Welcome to Error Tech. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our technology solutions and services.</p>
          
          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2 underline-offset-2">General</h2>
          <ul className="list-disc ml-6">
            <li>These terms and conditions govern your use of our website and the technology services we provide, including web development, mobile application development, UX/UI design, cloud solutions, digital marketing, AI integration, data analytics, and IT consulting services.</li>
            <li>By using our services, you agree to these terms and conditions in full. If you disagree with any part of these terms and conditions, you must not use our website or services.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">User Data Protection</h2>
          <ul className="list-disc ml-6">
            <li>We are committed to protecting your privacy and securing your data. All personal and business information collected through our website will be processed in accordance with our Privacy Policy.</li>
            <li>We implement industry-standard security measures including encryption, secure development practices, and regular security audits to protect your data.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Service Availability</h2>
          <ul className="list-disc ml-6">
            <li>We strive to provide accurate and up-to-date information regarding our technology solutions and availability. However, service offerings are subject to change based on technological advancements and market conditions.</li>
            <li>We reserve the right to modify existing services or introduce new features to better serve our clients&apos; needs. In cases where significant changes affect your current service agreement, we will provide reasonable notice.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Payment Policies</h2>
          <ul className="list-disc ml-6">
            <li>Payment for our technology services follows the schedule outlined in your service agreement or statement of work. This may include initial deposits, milestone payments, or subscription fees depending on the nature of services.</li>
            <li>All payments are subject to our <a href="/refund"><span className='font-medium underline underline-offset-4 decoration-gray-600'>refund policy</span></a>.</li>
            <li>We accept various payment methods, including credit/debit cards, bank transfers, and digital payment platforms. All transactions are processed through secure payment gateways.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Intellectual Property Rights</h2>
          <ul className="list-disc ml-6">
            <li>All content, source code, designs, and materials provided on our website are the intellectual property of Error Tech or our licensors, unless explicitly stated otherwise in a client agreement.</li>
            <li>For custom development projects, intellectual property rights will be assigned as specified in your service agreement. Typically, clients receive full rights to custom code and deliverables upon final payment.</li>
            <li>Error Tech retains the right to use non-proprietary techniques, ideas, and concepts developed during your project for other clients.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Cancellation and Refund Policies</h2>
          <ul className="list-disc ml-6">
            <li>Clients may cancel services by providing written notice to Error Tech in accordance with the terms specified in their service agreement.</li>
            <li>Refund eligibility is determined by our refund policy and is based on the project stage at cancellation:
              <ul className="list-disc ml-6">
                <li>Cancellation before project initialization: Full refund of any advance payment.</li>
                <li>Cancellation during the initial consultation or discovery phase: 75% refund.</li>
                <li>Cancellation after development has begun: Prorated refund based on work completed.</li>
              </ul>
            </li>
            <li>For subscription-based services, cancellations will stop future billing, but fees for the current billing period are generally non-refundable.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Disclaimers</h2>
          <ul className="list-disc ml-6">
            <li>Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive for excellence, we do not warrant that our digital solutions will be completely error-free or that all bugs can be fixed immediately.</li>
            <li>We are not responsible for third-party services integrated with our solutions, such as payment processors, hosting providers, or API services, though we will assist in resolving issues to the best of our ability.</li>
            <li>We reserve the right to utilize subcontractors or specialized partners for portions of project work while maintaining overall project responsibility.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Limitation of Liability</h2>
          <ul className="list-disc ml-6">
            <li>To the maximum extent permitted by law, Error Tech shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of our services.</li>
            <li>Our total liability for any claims arising from your use of our services shall not exceed the amount paid by you for the specific service giving rise to the claim.</li>
            <li>We are not liable for any business losses, including loss of data, profits, revenue, business opportunity, goodwill, or anticipated savings.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Governing Law</h2>
          <ul className="list-disc ml-6">
            <li>These terms and conditions shall be governed by and construed in accordance with applicable federal and state laws.</li>
            <li>Any disputes arising out of or in connection with these terms and conditions shall be resolved through mediation before pursuing legal action.</li>
          </ul>

          <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Contact Information</h2>
          <p>If you have any questions or concerns regarding these terms and conditions, please contact our legal department at <a href="mailto:legal@errortech.com"><span className='font-medium hover:underline underline-offset-4 decoration-gray-600'>legal@errortech.com</span></a></p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
