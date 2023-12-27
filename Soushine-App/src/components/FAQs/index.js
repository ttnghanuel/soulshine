import React, { useEffect, useState } from "react";
import "./faqs.css";

const data = [
  {
    description: "Product & Promos",
    list: [
      {
        question: "What are the ingredients used to make scented candles?",
        answer:
          "We use high-quality natural wax, blended with various aromatic oils and safe additives to create our scented candles, ensuring both safety and quality.",
      },
      {
        question: "How long can I expect a scented candle to burn?",
        answer:
          "The burning time varies depending on the candle size and type, typically ranging from 20 to 40 hours. Specific details can be found on the product label or description.",
      },
      {
        question: "What safety measures should I follow while using scented candles?",
        answer:
          "For safe use, always place the candle on a heat-resistant surface, away from drafts or flammable items. Keep out of reach of children and pets, and never leave a burning candle unattended.",
      },
      {
        question: "How can I make the most of the fragrance from scented candles?",
        answer:
          "To enhance fragrance diffusion, place the candle in a smaller enclosed space and allow good airflow. Burning multiple candles simultaneously in different areas can amplify the scent.",
      },
    ],
  },
  {
    description: "Delivery",
    list: [
      {
        question: "What are the available payment methods for purchasing scented candles?",
        answer:
          "We accept Cash on Delivery (COD) and bank transfer as payment methods for purchasing our scented candles. You can choose your preferred payment method during the checkout process.",
      },
      {
        question: "Is there an additional fee for using Cash on Delivery (COD) payment method?",
        answer:
          "Shipping fees are determined based on the selected shipping method, delivery address, and the total weight of the order. Details about shipping costs will be displayed during the checkout process.",
      },
      {
        question: "How long does it take for my scented candle order to be delivered?",
        answer:
          "Delivery times depend on the chosen shipping method and your location. Typically, orders are processed within 1-2 business days, and shipping duration ranges from 3 to 7 business days.",
      },
      {
        question: "Can I change the payment method after placing an order?",
        answer:
          "Once the order is placed, you cannot change the payment method. If you encounter any issues, please contact our customer service for assistance.",
      },
    ],
  },
  {
    description: "Refunds",
    list: [
      {
        question: "What is your refund policy for scented candle purchases?",
        answer:
          "Our refund policy allows for returns within 30 days of purchase. If you're not entirely satisfied with your scented candle, you may return it for a full refund, excluding shipping costs.",
      },
      {
        question: "How do I initiate a refund for a scented candle order?",
        answer:
          "To initiate a refund, please contact our customer service team within the specified return period. They will guide you through the process and provide you with further instructions.",
      },
      {
        question: "What condition should the scented candle be in for a refund?",
        answer:
          "For a refund, the scented candle must be unused, in its original packaging, and in the same condition as when it was received. Please ensure all tags and labels are intact.",
      },
      {
        question: "How long does it take to process a refund for returned scented candles?",
        answer:
          "Once we receive the returned scented candle and it meets the refund criteria, we will process the refund within 7-10 business days. The refund will be issued through the original payment method.",
      },
    ],
  },
];

function FAQs() {
  const [activedescription, setActivedescription] = useState(data[0]);

  const handleClickQuestion = (index) => {
    const faqsListEle = document.querySelectorAll(".faqs .faqs__item");
    faqsListEle[index].classList.toggle("active");
  };

  useEffect(() => {
    const faqsListEle = document.querySelectorAll(".faqs .faqs__item");
    faqsListEle.forEach((faqEle) => faqEle.classList.remove("active"));
  }, [activedescription]);

  return (
    <div className="faqs">
      <div className="row">
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <div className="d-flex justify-content-center flex-lg-column flex-wrap me-0 me-lg-5">
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`faqs__description-button font-cormorant fw-600 btn-outline-ss mx-3 mx-lg-0 ${
                    activedescription.description === item.description && "active"
                  }`}
                  onClick={() => setActivedescription(item)}
                >
                  {item.description}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="faqs__list ms-0 ms-lg-5">
            {activedescription.list.map((item, index) => {
              return (
                <div className="faqs__item" key={index} onClick={() => handleClickQuestion(index)}>
                  <h6 className="faqs__item__question fw-500 font-open-sans mb-0 pe-5">
                    {item.question}
                    <span className="faqs__item__question--plus"></span>
                    <span className="faqs__item__question--minus"></span>
                  </h6>
                  <p className="faqs__item__answer fw-300 font-open-sans mb-0">{item.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
