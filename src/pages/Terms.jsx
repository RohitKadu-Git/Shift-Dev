import React from 'react';

export default function Terms() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
        <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Services</h2>
            <p>Shift-Dev Web Solutions provides website development, design, and related digital services. By engaging our services, you agree to these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Project Delivery</h2>
            <p>We aim to deliver projects within the agreed timeline (typically 48 hours for standard websites). Delivery timelines may vary based on project complexity, client feedback turnaround, and scope changes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Payment Terms</h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>50% advance payment before project commencement</li>
              <li>Remaining 50% upon project completion and approval</li>
              <li>Payments are non-refundable once work has commenced</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Revisions</h2>
            <p>Each project includes up to 2 rounds of revisions. Additional revisions may incur extra charges as communicated before implementation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>Upon full payment, all intellectual property rights of the delivered website/application transfer to the client. We reserve the right to showcase the project in our portfolio unless otherwise agreed.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Providing necessary content (text, images, logos) in a timely manner</li>
              <li>Timely feedback and approvals</li>
              <li>Ensuring provided content does not infringe on third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>Shift-Dev Web Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or delivered products.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p>Either party may terminate the engagement with written notice. In case of termination, payment for work completed up to that point is due.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>For questions regarding these terms, reach us at:</p>
            <p className="mt-2 text-purple-400">rohitkadu2016@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
