// components/MapEmbed.js
export default function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.602173850135!2d77.54302458934136!3d12.93327137620052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f006a941e7d%3A0x7088b473ef6c14!2sSparkyAi!5e0!3m2!1sen!2sin!4v1750353152110!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
