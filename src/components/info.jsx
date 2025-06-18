import React from "react";
import "./Info.css";
import formulaPic from "../assets/CHO.jpg";
import brand1 from "../assets/IMG-20250618-WA0007.jpg";
import brand2 from "../assets/IMG-20250618-WA0013.jpg";
import brand3 from "../assets/IMG-20250618-WA0014.jpg";
import brand4 from "../assets/IMG-20250618-WA0015.jpg";
import brand5 from "../assets/Vitamin3.jpg";
import brand6 from "../assets/IMG-20250618-WA0017.jpg";
import logo from "../assets/umts.jpg";

// Sections data
const sections = [
  {
    title: "Description / Monograph",
    content: `Cholecalciferol is a fat-soluble vitamin (Vitamin D3) synthesized in the skin on exposure to sunlight (UVB radiation). It plays a vital role in calcium and phosphorus homeostasis and bone mineralization. It is also used in the prevention and treatment of Vitamin D deficiency and related disorders.`,
  },
  {
    title: "Formula and Structure",
    content: "",
    image: formulaPic,
  },
  {
    title: "Indications",
    content: `Cholecalciferol is primarily indicated in conditions like Hypocalcemia, Rickets, Vitamin D deficiency, and can also be given in adjunctive therapy as an alternative drug of choice in Hypoparathyroidism, Malignant neoplasms, Osteomalacia, Psoriasis.`,
  },
  {
    title: "Off-label Uses",
    content: `• Immune modulation in autoimmune diseases\n• Supportive therapy in cardiovascular health and diabetes`,
  },
  {
    title: "Contraindication",
    content: `Cholecalciferol is contraindicated in conditions like Hypercalcemia, and hypersensitivity to any component of the product.`,
  },
  {
    title: "Side Effects",
    content: `Severe or irreversible effects: Hypercalciuria, Renal damage, Hypercalcemia.\n\nAcute overdose symptoms: Nausea, Vomiting, Diarrhea, Polyuria, Sweating, Headache, Anorexia, Vertigo, Thirst, Lassitude.\n\nTolerable reactions: Anorexia, Diarrhea, Nausea and vomiting, Lassitude.`,
  },
  {
    title: "Warnings",
    content: `Taking this medicine is not a substitute for a well-balanced diet and exercise. Talk with your doctor or health care provider and follow a healthy lifestyle. Do not take this medicine with high-fiber foods, large amounts of alcohol, or drinks containing caffeine. Do not take this medicine within 2 hours of any other medicines. It should not be used in patients with hypercalcemia. Monitor plasma calcium concentration at regular intervals.`,
  },
  {
    title: "High Risk Group",
    content: `Drug should not be given to patients suffering from kidney dysfunction, and patients suffering from liver malfunction. If prescribing authority justifies the benefits of the drug against the possible damages, he/she should reevaluate them and consult the reference material and previous studies.`,
  },
  {
    title: "Kinetics Profile (ADME)",
    content: `• Absorption: Well absorbed from the GI tract with dietary fats\n• Distribution: Bound to vitamin D-binding protein; stored in fat tissue\n• Metabolism: Liver (25-hydroxylation) and kidneys (1-alpha-hydroxylation)\n• Excretion: Mainly in bile and feces\n• Half-life: ~15 days`,
  },
  {
    title: "Drug Interactions",
    content: `• Reduced absorption with: Cholestyramine, Orlistat, Mineral oil\n• Increased risk of hypercalcemia with: Thiazide diuretics\n• Reduced effect by: Rifampin, Phenytoin, Barbiturates`,
  },
  {
    title: "FDA Approved",
    content: `Yes, cholecalciferol (Vitamin D3) is FDA-approved, both as a dietary supplement and as a prescription medication for treating vitamin D deficiency. It's available both over-the-counter and with a doctor's prescription, depending on the specific product and dosage.`,
  },
];

// Card component
const Card = ({ title, content, image }) => (
  <div className="card">
    <h2>{title}</h2>
    {content && <p style={{ whiteSpace: "pre-line" }}>{content}</p>}
    {image && <img src={image} alt={title} className="vitamin-img" />}
  </div>
);

// Main component
const Info = () => {
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Drug Info Logo" className="logo-image" />
        
      </div>

      <div className="card-container">
        <h1 className="page-title">Cholecalciferol (Vitamin D3) Details</h1>

        {sections.map((section, index) => (
          <Card
            key={index}
            title={section.title}
            content={section.content}
            image={section.image}
          />
        ))}

        {/* Pregnancy Category */}
      

        {/* Brands Table */}
        <div className="card">
          <h2>Common Brands Available in Pakistan</h2>
          <table className="brands-table">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Strength</th>
                <th>Dosage Form</th>
                <th>Route</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vita-D</td>
                <td>10000 IU</td>
                <td>Tablet</td>
                <td>Oral</td>
              </tr>
              <tr>
                <td>D-Sun</td>
                <td>5000 IU</td>
                <td>Drop</td>
                <td>Oral</td>
              </tr>
              <tr>
                <td>Sglndrop-D</td>
                <td>5000 IU</td>
                <td>Softgel capsules</td>
                <td>Oral</td>
              </tr>
              <tr>
                <td>Indrop-D</td>
                <td>1 mL</td>
                <td>Softgel capsules</td>
                <td>Oral</td>
              </tr>
              <tr>
                <td>Sterol-D</td>
                <td>5000 IU</td>
                <td>SoftGelCaps</td>
                <td>Oral</td>
              </tr>
            </tbody>
          </table>

          {/* Brand Images */}
          <div className="brand-images-grid">
            <img src={brand1} alt="Brand 1" />
            <img src={brand2} alt="Brand 2" />
            <img src={brand3} alt="Brand 3" />
            <img src={brand4} alt="Brand 4" />
            <img src={brand5} alt="Brand 5" />
            <img src={brand6} alt="Brand 6" />
          </div>
        </div>

        {/* Brochure Link */}
        <div className="card">
          <h2>Brochure Link</h2>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Download Brochure (PDF)
          </a>
        </div>

        {/* References */}
        <div className="card">
          <h2>References</h2>
          <ul>
            <li>British National Formulary (BNF)</li>
            <li>United States Pharmacopeia (USP)</li>
            <li>FDA and WHO Guidelines</li>
            <li>pharmapedia</li>
            <li>Drug Monograph: Cholecalciferol - Micromedex</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
