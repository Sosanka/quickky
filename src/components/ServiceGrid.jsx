import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import BookingModal from "./BookingModal";
import services from "../data/services";

const ServiceGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Popular Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={() => setSelectedService(service)}
          />
        ))}
      </div>

      <BookingModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default ServiceGrid;
