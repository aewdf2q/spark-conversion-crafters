export const FAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "Do I need advanced tech skills or coding knowledge?",
              answer: "No. The IG Flow Protocol handles the heavy lifting for you. We set it up, walk you through it, and provide ongoing support so you can focus on coaching, not troubleshooting."
            },
            {
              question: "Will my DMs sound robotic or impersonal?",
              answer: "Not at all. Our approach prioritizes conversational flows that match your brand voice. This ensures your prospects feel heard and engaged, rather than spammed."
            },
            {
              question: "How does this differ from basic auto-DMs?",
              answer: "Unlike simple auto-responders, the IG Flow Protocol uses conditional logic to qualify leads, ask relevant questions, and guide the conversation toward booking a call—providing real value, not just an auto-reply."
            },
            {
              question: "Is there a long-term commitment?",
              answer: "We offer flexible arrangements. If you don't see real client bookings by Day 30, you owe us nothing, so there's no risk in trying it out."
            },
            {
              question: "Will I lose control of my Instagram account?",
              answer: "No. You retain complete access and control over your account. Our protocol runs in the background to streamline your DMs, so you can jump in anytime."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};