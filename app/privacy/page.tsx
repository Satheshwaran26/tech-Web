import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#080808] font-extralight text-lg text-[#d0d0d0] py-24 px-8 sm:px-6 lg:px-14">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extralight text-[#c1c1c1] mb-6">Privacy Policy</h1>
        <p>
          At Error Tech, we prioritize your privacy and are committed to safeguarding your personal data. This Privacy Policy outlines how we collect, use, protect, and handle your information when you use our technology solutions and services.
        </p>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2 underline-offset-2">Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>
            We collect personal data that you voluntarily provide when you engage with our services, request consultations, or contact our support team. This may include your name, email address, company information, and project requirements.
          </li>
          <li>
            We automatically collect certain technical data when you visit our website, including IP address, device information, browser type, and interaction patterns to optimize your experience.
          </li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Use of Information</h2>
        <ul className="list-disc ml-6">
          <li>We use your information to deliver and improve our technology solutions, provide technical support, send relevant updates about our services, and maintain our relationship with you.</li>
          <li>We analyze usage patterns and performance metrics to enhance our platform&apos;s functionality, security, and user experience.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Disclosure of Information</h2>
        <ul className="list-disc ml-6">
          <li>We do not sell or rent your personal data to third parties. Your information is only shared when necessary to provide our services or when legally required.</li>
          <li>We may utilize trusted technology partners and service providers who assist us with infrastructure, analytics, and service delivery, all under strict confidentiality agreements.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Data Security</h2>
        <ul className="list-disc ml-6">
          <li>We implement industry-standard security measures including encryption, secure development practices, and regular security audits to protect your data.</li>
          <li>While we employ advanced security practices, no digital transmission or storage system is 100% secure. We continuously update our security protocols to address emerging threats.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Your Rights</h2>
        <ul className="list-disc ml-6">
          <li>You have the right to access, correct, or delete your personal data. You may also request information about how your data is processed and object to certain processing activities.</li>
          <li>To exercise your data rights or address privacy concerns, please contact us at privacy@errortech.com. We aim to respond to all legitimate requests within 30 days.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Cookies and Tracking</h2>
        <ul className="list-disc ml-6">
          <li>Our platform uses cookies and similar technologies to enhance navigation, remember your preferences, analyze usage patterns, and optimize performance.</li>
          <li>You can manage cookie preferences through your browser settings. Note that disabling certain cookies may limit functionality or performance of our website.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Changes to this Privacy Policy</h2>
        <ul className="list-disc ml-6">
          <li>We may update this policy periodically to reflect changes in our practices or regulatory requirements. Significant changes will be communicated through our website or direct notification when possible.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Contact Information</h2>
        <p>If you have questions or concerns about our privacy practices, please contact us at privacy@errortech.com.</p>

        <p className="mt-4">
          By using Error Tech services, you acknowledge and consent to the practices described in this Privacy Policy. We appreciate your trust and are committed to responsible data stewardship.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
