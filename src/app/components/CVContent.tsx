import { Mail, Phone, MapPin, Calendar, User, Globe } from 'lucide-react';

export function CVContent() {
  return (
    <div id="cv-content" className="bg-white p-8 max-w-[800px] mx-auto">
      {/* Header Section */}
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">DR. PRIYA PRAJAPATI</h1>
        <p className="text-lg text-blue-600 font-semibold">MBBS, MD (Pathology)</p>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-lg">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-sm font-medium text-gray-900">spriya8692@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Contact</p>
              <p className="text-sm font-medium text-gray-900">+91 7355332985</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="text-sm font-medium text-gray-900">08/06/1992</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <User className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="text-sm font-medium text-gray-900">Female</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Globe className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Nationality</p>
              <p className="text-sm font-medium text-gray-900">Indian</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Current Address</p>
              <p className="text-sm font-medium text-gray-900">New RMO Hostel, Room No. 720, Sion, Mumbai - 400022</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Permanent Address</p>
              <p className="text-sm font-medium text-gray-900">63A, Moh, Ailwal near Gurudwara, Post Sadar, Azamgarh, U.P. - 276001</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Globe className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Web resume</p>
              <p className="text-sm font-medium text-blue-600">
                <a href="https://drpriyap.github.io/cv/" target="_blank" rel="noreferrer">https://drpriyap.github.io/cv/</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Qualifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Professional Qualifications
        </h2>
        
        {/* MD Pathology */}
        <div className="mb-6 pl-4 border-l-4 border-blue-400">
          <h3 className="text-lg font-bold text-gray-900">M.D. Pathology</h3>
          <p className="text-sm text-gray-700 mt-1">
            Lokmanya Tilak Municipal Medical College, Sion, Mumbai
          </p>
          <p className="text-sm text-gray-600">
            Maharashtra University of Health Sciences, Nashik
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Duration:</span> 2022 - 2025
          </p>
        </div>

        {/* MBBS */}
        <div className="pl-4 border-l-4 border-blue-400">
          <h3 className="text-lg font-bold text-gray-900">M.B.B.S.</h3>
          <p className="text-sm text-gray-700 mt-1">
            B.R.D. Medical College, Gorakhpur
          </p>
          <p className="text-sm text-gray-600">
            D.D.U. Gorakhpur University, Gorakhpur
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Duration:</span> 2014 - February 2019
          </p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Languages
        </h2>
        <p className="text-sm text-gray-700">English, Hindi</p>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Certifications
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              Certification for BCBR (Basic Course in Biomedical Research) completed
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              Certification for Good Clinical Practice: NIDA Clinical Trials Network
            </span>
          </li>
        </ul>
      </section>

      {/* Registration */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Registered with Medical Organisations
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              <span className="font-medium">Maharashtra Medical Council (MMC):</span> MMC20260009088
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              <span className="font-medium">U.P. Medical Council:</span> 89532/03/06/2020
            </span>
          </li>
        </ul>
      </section>

      {/* Thesis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Thesis
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">
            "Clinicopathological study of Prostatic biopsy of Adenocarcinoma of Prostate"
          </p>
          <p className="text-sm text-gray-600">
            Under the Guidance of Dr. Anitha Padmanabhan (Assistant Professor)
          </p>
        </div>
      </section>

      {/* Poster Presentations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Poster Presentations at Pathology Conferences
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-900 mb-1">
              "Two Case Reports of Clear Cell Sarcoma in Adolescents Kidneys with Inferior Vena Cava Thrombus"
            </p>
            <p className="text-sm text-blue-600">
              MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-900 mb-1">
              "Role of Cytology in Metastatic Malignancies to Lymph Nodes"
            </p>
            <p className="text-sm text-blue-600">
              MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati
            </p>
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          Conferences Attended
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              Breast Imaging & Interventional Techniques (BRIT) Conference, Department of Pathology, Tata Memorial Hospital, Mumbai
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-sm text-gray-700">
              Histo-Immunotech 2025, TMH Mumbai
            </span>
          </li>
        </ul>
      </section>

      {/* References */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
          References
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-900">Dr. Anitha Padmanabhan</p>
            <p className="text-sm text-gray-600">Assistant Professor</p>
            <p className="text-sm text-gray-600">LTMMC & GH - Sion</p>
            <p className="text-sm text-blue-600 mt-2">9820458848</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-900">Dr. Vaishali Gaikwad</p>
            <p className="text-sm text-gray-600">Additional Professor</p>
            <p className="text-sm text-gray-600">LTMMC & GH - Sion</p>
            <p className="text-sm text-blue-600 mt-2">9833462578</p>
          </div>
        </div>
      </section>
    </div>
  );
}
