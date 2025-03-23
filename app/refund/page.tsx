import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-[#080808] font-extralight text-lg text-[#d0d0d0] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extralight text-[#ffffff] mb-4">
          Refund Policy
        </h1>
        <p className="text-[#d0d0d0]">
          At Error Tech, we are committed to delivering high-quality technology solutions and services. We understand that circumstances may arise where you need to request a refund, and we have outlined our policy below.
        </p>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Refund Eligibility</h2>
        <ul className="list-disc ml-6 text-[#d0d0d0]">
          <li>
            For our technology services and solutions, refunds may be applicable under the following conditions:
            <ul className="list-disc ml-6 text-[#d0d0d0]">
              <li>Cancellation of services before project initialization: Full refund of any advance payment.</li>
              <li>Cancellation during the initial consultation or discovery phase (within first 7 days): 75% refund.</li>
              <li>Cancellation after project development has begun: Prorated refund based on work completed.</li>
              <li>For subscription-based services, cancellations will stop future billing, but fees for the current billing period are non-refundable.</li>
            </ul>
          </li>
          <li>If Error Tech fails to deliver the agreed-upon services or if there are significant unresolvable technical issues on our end, you may be eligible for a full or partial refund based on the specific circumstances.</li>
        </ul>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Refund Process</h2>
        <ul className="list-disc ml-6 text-[#d0d0d0]">
          <li>To request a refund, please contact our client services team at refunds@errortech.com with your project details and reason for the refund request.</li>
          <li>All refund requests will be reviewed within 3 business days, and if approved, processed within 5-10 business days.</li>
          <li>Refunds will be issued through the original payment method when possible.</li>
        </ul>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Non-Refundable Items</h2>
        <ul className="list-disc ml-6 text-[#d0d0d0]">
          <li>Custom development work that has been completed and delivered according to specifications.</li>
          <li>Services where intellectual property, code, or digital assets have been transferred to the client.</li>
          <li>Third-party fees, licenses, or services that have been procured on your behalf.</li>
        </ul>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Contact Information</h2>
        <p className="text-[#d0d0d0]">If you have any questions about our refund policy or need to discuss a specific situation, please contact us at refunds@errortech.com or through our support portal.</p>

        <p className="mt-4 text-[#d0d0d0]">
          By engaging our services, you acknowledge and agree to this Refund Policy. Error Tech reserves the right to make exceptions or modifications to this policy on a case-by-case basis at our discretion.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
