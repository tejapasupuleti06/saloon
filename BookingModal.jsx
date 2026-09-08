import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, MessageCircle, Phone, X } from "lucide-react";
import { services, comboOffers, siteData } from "../data/salonData";

export default function BookingModal({ isOpen, onClose, defaultService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService || "",
    date: "",
    time: "",
    paymentMethod: "salon",
    note: ""
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const paymentOptions = [
    {
      id: "salon",
      label: "Pay at Salon",
      badge: "NO ADVANCE REQUIRED",
      icon: "🏪",
      desc: "Pay directly at the counter after your service via Cash, UPI QR (GPay / PhonePe), or Card"
    }
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentLabels = {
      salon: "🏪 Pay at Salon (Cash / UPI / Card at Counter)"
    };

    // Compose formatted WhatsApp message
    const lines = [
      `*APPOINTMENT BOOKING — PR MEN DOT*`,
      `✂️ *Service:* ${formData.service || "General Consultation"}`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone || "Not provided"}`,
      `📅 *Date:* ${formData.date}`,
      `⏰ *Preferred Time:* ${formData.time}`,
      `💳 *Payment Method:* ${paymentLabels[formData.paymentMethod] || "Pay at Salon"}`,
      formData.note ? `📝 *Note:* ${formData.note}` : ""
    ].filter(Boolean);

    const fullMessage = lines.join("\n");
    const whatsappUrl = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  const handleResetAndClose = () => {
    setSent(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      paymentMethod: "salon",
      note: ""
    });
    onClose();
  };

  // Combine services and combos for dropdown
  const allServiceOptions = [
    ...services.map((s) => ({ label: `${s.title} (${s.price})`, value: s.title })),
    ...comboOffers.map((c) => ({ label: `Combo: ${c.title} (${c.price})`, value: c.title }))
  ];

  // Curated 30-minute interval slots matching salon hours (8:30 AM - 10:00 PM)
  const bookingTimeSlots = [
    { group: "Morning Slots (8:30 AM – 12:00 PM)", slots: ["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"] },
    { group: "Afternoon Slots (12:00 PM – 5:00 PM)", slots: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"] },
    { group: "Evening Peak Slots (5:00 PM – 9:30 PM)", slots: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"] }
  ];

  return createPortal(
    <div className="modal-backdrop" onClick={handleResetAndClose} role="dialog" aria-modal="true">
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={handleResetAndClose} aria-label="Close booking modal">
          <X size={18} />
        </button>

        {sent ? (
          <div className="success">
            <div className="success-icon">
              <Check size={28} />
            </div>
            <h2>Appointment Sent!</h2>
            <p>
              Your booking details have been directed to our WhatsApp at <strong>{siteData.displayPhone}</strong>. We will confirm your exact slot shortly.
            </p>
            <div className="success-actions">
              <a href={siteData.telLink} className="primary ghost-dark">
                <Phone size={15} /> CALL SALON DIRECTLY
              </a>
              <button className="primary dark" onClick={handleResetAndClose}>
                DONE
              </button>
            </div>
          </div>
        ) : (
          <>
            <span className="booking-modal-kicker">✦ RESERVE YOUR CHAIR ✦</span>
            <h2 className="booking-modal-heading">
              Let's get you <span className="gold-accent-word">in.</span>
            </h2>
            <p className="booking-modal-desc">
              Bookings are forwarded directly to our team via WhatsApp for immediate confirmation.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Your Name *
                  <input
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>

                <label>
                  Your Contact Number *
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>
              </div>

              <label>
                Select Service or Combo *
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  {allServiceOptions.map((opt, i) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="form-row">
                <label>
                  Preferred Date *
                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </label>
                <label>
                  Preferred Time Slot *
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="" disabled>
                      Choose a time slot...
                    </option>
                    {bookingTimeSlots.map((group, idx) => (
                      <optgroup key={idx} label={group.group}>
                        {group.slots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="First Available Chair">First Available Chair (Walk-in)</option>
                  </select>
                </label>
              </div>

              {/* Preferred Payment Method */}
              <div className="payment-select-group">
                <div className="payment-group-header">
                  <label>Payment Method *</label>
                  <span className="payment-safety-badge">🔒 Pay During Visit • No Advance Needed</span>
                </div>

                <div className="payment-grid">
                  {paymentOptions.map((opt) => {
                    const isSelected = formData.paymentMethod === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={`payment-option-card ${isSelected ? "selected" : ""}`}
                        onClick={() => setFormData({ ...formData, paymentMethod: opt.id })}
                      >
                        <div className="payment-card-left">
                          <span className="payment-icon">{opt.icon}</span>
                          <div>
                            <div className="payment-title-row">
                              <strong>{opt.label}</strong>
                              <span className="payment-mini-badge">{opt.badge}</span>
                            </div>
                            <small>{opt.desc}</small>
                          </div>
                        </div>

                        <div className="payment-radio">
                          {isSelected && <span className="payment-radio-dot" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <label>
                Special Requests or Notes (Optional)
                <textarea
                  placeholder="Hair texture, specific barber request, or haircut details..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                />
              </label>

              <button className="primary dark booking-submit-btn" type="submit">
                <MessageCircle size={16} /> SEND VIA WHATSAPP <ArrowRight size={17} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
