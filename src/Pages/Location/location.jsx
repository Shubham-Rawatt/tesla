const Location = () => {
  const locations = [
    { top: "30%", left: "22%", type: "red" },
    { top: "35%", left: "27%", type: "gray" },
    { top: "40%", left: "32%", type: "red" },
    { top: "45%", left: "38%", type: "gray" },
    { top: "32%", left: "45%", type: "red" },
    { top: "50%", left: "48%", type: "gray" },
    { top: "38%", left: "55%", type: "red" },
    { top: "55%", left: "60%", type: "gray" },
    { top: "42%", left: "65%", type: "red" },
    { top: "60%", left: "70%", type: "gray" },
  ];

  return (
    <section className="mt-8 px-5">
      <div className="relative h-125 w-full overflow-hidden">
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11944119.692590531!2d-90.66220264328928!3d37.871914597338034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1786428228766!5m2!1sen!2sin"
          className="h-110 w-315 border-0 mx-auto rounded-lg"
          title="Tesla Find Us"
        ></iframe>

        {/* Location dots */}
        {locations.map((location, index) => (
          <span
            key={index}
            className={`absolute h-1 w-1 rounded-full ${
              location.type === "red" ? "bg-red-500" : "bg-gray-400"
            }`}
            style={{
              top: location.top,
              left: location.left,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Location;
