import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  UnderlineType,
  PageBreak,
  Header,
  Footer,
  PageNumber
} from 'docx';
import { saveAs } from 'file-saver';

export async function downloadAsPDF() {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add text
  const addText = (
    text: string,
    x: number,
    y: number,
    options: {
      fontSize?: number;
      fontStyle?: 'normal' | 'bold' | 'italic';
      color?: string;
      align?: 'left' | 'center' | 'right';
      maxWidth?: number;
    } = {}
  ) => {
    const {
      fontSize = 10,
      fontStyle = 'normal',
      color = '#000000',
      align = 'left',
      maxWidth = contentWidth
    } = options;

    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', fontStyle);

    // Convert hex color to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    pdf.setTextColor(r, g, b);

    const lines = pdf.splitTextToSize(text, maxWidth);

    lines.forEach((line: string, index: number) => {
      let xPos = x;
      if (align === 'center') {
        const textWidth = pdf.getTextWidth(line);
        xPos = x + (maxWidth - textWidth) / 2;
      } else if (align === 'right') {
        const textWidth = pdf.getTextWidth(line);
        xPos = x + maxWidth - textWidth;
      }
      pdf.text(line, xPos, y + (index * fontSize * 0.35));
    });

    return y + (lines.length * fontSize * 0.35);
  };

  // Helper function to add a line
  const addLine = (x1: number, y1: number, x2: number, y2: number, color = '#2563eb', width = 0.5) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    pdf.setDrawColor(r, g, b);
    pdf.setLineWidth(width);
    pdf.line(x1, y1, x2, y2);
  };

  // Helper function to add a rectangle
  const addRect = (x: number, y: number, width: number, height: number, fillColor?: string) => {
    if (fillColor) {
      const r = parseInt(fillColor.slice(1, 3), 16);
      const g = parseInt(fillColor.slice(3, 5), 16);
      const b = parseInt(fillColor.slice(5, 7), 16);
      pdf.setFillColor(r, g, b);
      pdf.rect(x, y, width, height, 'F');
    } else {
      pdf.rect(x, y, width, height);
    }
  };

  // Header - Name and Title
  yPosition = addText('DR. PRIYA PRAJAPATI', margin, yPosition + 10, {
    fontSize: 24,
    fontStyle: 'bold',
    color: '#1e293b'
  });

  addLine(margin, yPosition + 2, pageWidth - margin, yPosition + 2, '#2563eb', 1.5);

  yPosition = addText('MBBS, MD (Pathology)', margin, yPosition + 8, {
    fontSize: 12,
    fontStyle: 'bold',
    color: '#2563eb'
  });

  yPosition += 10;

  // Contact Information Box
  addRect(margin, yPosition, contentWidth, 55, '#f8fafc');

  const contactY = yPosition + 6;
  const col1X = margin + 5;
  const col2X = margin + contentWidth / 2 + 5;

  let leftY = contactY;
  let rightY = contactY;

  // Left column
  leftY = addText('Email: ', col1X, leftY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  leftY = addText('spriya8692@gmail.com', col1X, leftY + 1, { fontSize: 9, color: '#1e293b' });
  leftY += 4;

  leftY = addText('Contact: ', col1X, leftY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  leftY = addText('+91 7355332985', col1X, leftY + 1, { fontSize: 9, color: '#1e293b' });
  leftY += 4;

  leftY = addText('Date of Birth: ', col1X, leftY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  leftY = addText('08/06/1992', col1X, leftY + 1, { fontSize: 9, color: '#1e293b' });
  leftY += 4;

  leftY = addText('Gender: ', col1X, leftY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  leftY = addText('Female', col1X, leftY + 1, { fontSize: 9, color: '#1e293b' });

  // Right column
  rightY = addText('Nationality: ', col2X, rightY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  rightY = addText('Indian', col2X, rightY + 1, { fontSize: 9, color: '#1e293b' });
  rightY += 4;

  rightY = addText('Current Address: ', col2X, rightY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  rightY = addText('New RMO Hostel, Room No. 720,', col2X, rightY + 1, { fontSize: 9, color: '#1e293b' });
  rightY = addText('Sion, Mumbai - 400022', col2X, rightY + 1, { fontSize: 9, color: '#1e293b' });
  rightY += 4;

  rightY = addText('Permanent Address: ', col2X, rightY, { fontSize: 8, color: '#64748b', fontStyle: 'bold' });
  rightY = addText('63A, Moh, Ailwal near Gurudwara,', col2X, rightY + 1, { fontSize: 9, color: '#1e293b' });
  rightY = addText('Post Sadar, Azamgarh, U.P. - 276001', col2X, rightY + 1, { fontSize: 9, color: '#1e293b' });

  yPosition += 60;

  // Professional Qualifications
  yPosition = addText('PROFESSIONAL QUALIFICATIONS', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 80, yPosition + 1, '#2563eb', 1);
  yPosition += 8;

  // MD Pathology
  //addRect(margin - 2, yPosition, 3, 25, '#60a5fa');
  yPosition = addText('M.D. Pathology', margin + 5, yPosition, {
    fontSize: 11,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  yPosition = addText('Lokmanya Tilak Municipal Medical College, Sion, Mumbai', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition = addText('Maharashtra University of Health Sciences, Nashik', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  yPosition = addText('Duration: 2022 - 2025', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  yPosition += 8;

  // MBBS
  //addRect(margin - 2, yPosition, 3, 25, '#60a5fa');
  yPosition = addText('M.B.B.S.', margin + 5, yPosition, {
    fontSize: 11,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  yPosition = addText('B.R.D. Medical College, Gorakhpur', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition = addText('D.D.U. Gorakhpur University, Gorakhpur', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  yPosition = addText('Duration: 2014 - February 2019', margin + 5, yPosition + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  yPosition += 10;

  // Languages
  yPosition = addText('LANGUAGES', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 35, yPosition + 1, '#2563eb', 1);
  yPosition += 6;
  yPosition = addText('English, Hindi', margin, yPosition, {
    fontSize: 10,
    color: '#475569'
  });
  yPosition += 8;

  // Certifications
  yPosition = addText('CERTIFICATIONS', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 45, yPosition + 1, '#2563eb', 1);
  yPosition += 6;
  yPosition = addText('• Certification for BCBR (Basic Course in Biomedical Research) completed', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 1;
  yPosition = addText('• Certification for Good Clinical Practice: NIDA Clinical Trials Network', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 8;

  // Registration
  yPosition = addText('REGISTERED WITH MEDICAL ORGANISATIONS', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 110, yPosition + 1, '#2563eb', 1);
  yPosition += 6;
  yPosition = addText('• Maharashtra Medical Council (MMC): MMC20260009088', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 1;
  yPosition = addText('• U.P. Medical Council: 89532/03/06/2020', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 8;

  // Check if we need a new page
  if (yPosition > pageHeight - 60) {
    pdf.addPage();
    yPosition = margin;
  }

  // Thesis
  yPosition = addText('THESIS', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 25, yPosition + 1, '#2563eb', 1);
  yPosition += 6;
  addRect(margin, yPosition, contentWidth, 16, '#eff6ff');
  yPosition = addText('"Clinicopathological study of Prostatic biopsy of Adenocarcinoma of Prostate"', margin + 3, yPosition + 5, {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#1e293b'
  });
  yPosition = addText('Under the Guidance of Dr. Anitha Padmanabhan (Assistant Professor)', margin + 3, yPosition + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  yPosition += 10;

  // Poster Presentations
  yPosition = addText('POSTER PRESENTATIONS AT PATHOLOGY CONFERENCES', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 135, yPosition + 1, '#2563eb', 1);
  yPosition += 6;

  addRect(margin, yPosition, contentWidth, 12, '#f8fafc');
  yPosition = addText('"Two Case Reports of Clear Cell Sarcoma in Adolescents Kidneys with Inferior Vena Cava Thrombus"', margin + 3, yPosition + 4, {
    fontSize: 9,
    color: '#1e293b'
  });
  yPosition = addText('MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune', margin + 3, yPosition + 1, {
    fontSize: 9,
    color: '#2563eb'
  });
  yPosition += 5;

  addRect(margin, yPosition, contentWidth, 12, '#f8fafc');
  yPosition = addText('"Role of Cytology in Metastatic Malignancies to Lymph Nodes"', margin + 3, yPosition + 4, {
    fontSize: 9,
    color: '#1e293b'
  });
  yPosition = addText('MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati', margin + 3, yPosition + 1, {
    fontSize: 9,
    color: '#2563eb'
  });
  yPosition += 8;

  // Check if we need a new page
  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = margin;
  }

  // Conferences Attended
  yPosition = addText('CONFERENCES ATTENDED', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 70, yPosition + 1, '#2563eb', 1);
  yPosition += 6;
  yPosition = addText('• MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 1;
  yPosition = addText('• MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 1;
  yPosition = addText('• Breast Imaging & Interventional Techniques (BRIT) Conference, Dept. of Pathology, TMH, Mumbai', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 1;
  yPosition = addText('• Histo-Immunotech 2025, TMH Mumbai', margin, yPosition, {
    fontSize: 9,
    color: '#475569'
  });
  yPosition += 8;

  // References
  yPosition = addText('REFERENCES', margin, yPosition, {
    fontSize: 14,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  addLine(margin, yPosition + 1, margin + 35, yPosition + 1, '#2563eb', 1);
  yPosition += 6;

  // Reference 1
  addRect(margin, yPosition, contentWidth / 2 - 5, 18, '#f8fafc');
  let refY = yPosition + 4;
  refY = addText('Dr. Anitha Padmanabhan', margin + 3, refY, {
    fontSize: 10,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  refY = addText('Assistant Professor, LTMMC & GH - Sion', margin + 3, refY + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  refY = addText('Contact: 9820458848', margin + 3, refY + 1, {
    fontSize: 9,
    color: '#2563eb'
  });

  // Reference 2
  addRect(margin + contentWidth / 2 + 5, yPosition, contentWidth / 2 - 5, 18, '#f8fafc');
  let refY2 = yPosition + 4;
  refY2 = addText('Dr. Vaishali Gaikwad', margin + contentWidth / 2 + 8, refY2, {
    fontSize: 10,
    fontStyle: 'bold',
    color: '#1e293b'
  });
  refY2 = addText('Additional Professor, LTMMC & GH - Sion', margin + contentWidth / 2 + 8, refY2 + 1, {
    fontSize: 9,
    color: '#64748b'
  });
  refY2 = addText('Contact: 9833462578', margin + contentWidth / 2 + 8, refY2 + 1, {
    fontSize: 9,
    color: '#2563eb'
  });

  // Footer
  const footerY = pageHeight - 10;
  addText('Generated on ' + new Date().toLocaleDateString(), margin, footerY, {
    fontSize: 8,
    color: '#94a3b8'
  });
  addText('Page 1', pageWidth - margin, footerY, {
    fontSize: 8,
    color: '#94a3b8',
    align: 'right',
    maxWidth: 20
  });

  pdf.save('Dr_Priya_Prajapati_CV.pdf');
}

export async function downloadAsDOC() {
  try {
    const doc = new Document({
      styles: {
        default: {
          heading1: {
            run: {
              size: 32,
              bold: true,
              color: '1e293b',
            },
            paragraph: {
              spacing: { after: 240 },
            },
          },
          heading2: {
            run: {
              size: 24,
              bold: true,
              color: '2563eb',
            },
            paragraph: {
              spacing: { before: 240, after: 120 },
              border: {
                bottom: {
                  color: '2563eb',
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 12,
                },
              },
            },
          },
        },
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1440,
                right: 1440,
                bottom: 1440,
                left: 1440,
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: 'Dr. Priya Prajapati - Curriculum Vitae',
                      size: 16,
                      color: '64748b',
                    }),
                  ],
                  border: {
                    bottom: {
                      color: 'e2e8f0',
                      space: 1,
                      style: BorderStyle.SINGLE,
                      size: 6,
                    },
                  },
                  spacing: { after: 200 },
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 200 },
                  border: {
                    top: {
                      color: 'e2e8f0',
                      space: 1,
                      style: BorderStyle.SINGLE,
                      size: 6,
                    },
                  },
                  children: [
                    new TextRun({
                      text: 'Page ',
                      size: 16,
                      color: '64748b',
                    }),
                    new TextRun({
                      children: [PageNumber.CURRENT],
                      size: 16,
                      color: '64748b',
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            // Header with name
            new Paragraph({
              text: 'DR. PRIYA PRAJAPATI',
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.LEFT,
              spacing: { after: 120 },
            }),

            new Paragraph({
              spacing: { after: 400 },
              children: [
                new TextRun({
                  text: 'MBBS, MD (Pathology)',
                  color: '2563eb',
                  bold: true,
                  size: 24,
                }),
              ],
            }),

            // Contact Information Table
            new Paragraph({
              text: 'CONTACT INFORMATION',
              heading: HeadingLevel.HEADING_2,
            }),

            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 50, type: WidthType.PERCENTAGE },
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({ text: '✉ Email: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: 'spriya8692@gmail.com', size: 20 }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: '☎ Contact: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: '+91 7355332985', size: 20 }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: '📅 DOB: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: '08/06/1992', size: 20 }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: '👤 Gender: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: 'Female', size: 20 }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      width: { size: 50, type: WidthType.PERCENTAGE },
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({ text: '🌍 Nationality: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: 'Indian', size: 20 }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: '📍 Current Address: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: 'New RMO Hostel, Room No. 720, Sion, Mumbai - 400022', size: 20 }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: '📍 Permanent Address: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: '63A, Moh, Ailwal near Gurudwara, Post Sadar, Azamgarh, U.P. - 276001', size: 20 }),
                          ],
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({ text: 'Web resume: ', bold: true, size: 20, color: '64748b' }),
                            new TextRun({ text: 'https://drpriyap.github.io/cv/', size: 20, color: '2563eb', underline: { type: UnderlineType.SINGLE } }),
                          ],
                          spacing: { after: 100 },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            // Professional Qualifications
            new Paragraph({
              text: 'PROFESSIONAL QUALIFICATIONS',
              heading: HeadingLevel.HEADING_2,
            }),

            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 100, type: WidthType.PERCENTAGE },
                      shading: { fill: 'eff6ff', type: ShadingType.SOLID },
                      margins: {
                        top: 100,
                        bottom: 100,
                        left: 100,
                        right: 100,
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'M.D. Pathology',
                              bold: true,
                              size: 22,
                              color: '1e293b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          text: 'Lokmanya Tilak Municipal Medical College, Sion, Mumbai',
                          spacing: { after: 60 },
                          run: {
                            size: 20,
                          },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Maharashtra University of Health Sciences, Nashik',
                              size: 20,
                              color: '475569',
                            }),
                          ],
                          spacing: { after: 60 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Duration: ',
                              size: 20,
                              bold: true,
                            }),
                            new TextRun({
                              text: '2022 - 2025',
                              size: 20,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 100, type: WidthType.PERCENTAGE },
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      margins: {
                        top: 100,
                        bottom: 100,
                        left: 100,
                        right: 100,
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'M.B.B.S.',
                              bold: true,
                              size: 22,
                              color: '1e293b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          text: 'B.R.D. Medical College, Gorakhpur',
                          spacing: { after: 60 },
                          run: {
                            size: 20,
                          },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'D.D.U. Gorakhpur University, Gorakhpur',
                              size: 20,
                              color: '475569',
                            }),
                          ],
                          spacing: { after: 60 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Duration: ',
                              size: 20,
                              bold: true,
                            }),
                            new TextRun({
                              text: '2014 - February 2019',
                              size: 20,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            // Languages
            new Paragraph({
              text: 'LANGUAGES',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: 'English, Hindi',
              spacing: { after: 300 },
              run: {
                size: 20,
              },
            }),

            // Certifications
            new Paragraph({
              text: 'CERTIFICATIONS',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '✓ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'Certification for BCBR (Basic Course in Biomedical Research) completed', size: 20 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '✓ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'Certification for Good Clinical Practice: NIDA Clinical Trials Network', size: 20 }),
              ],
              spacing: { after: 300 },
            }),

            // Registration
            new Paragraph({
              text: 'REGISTERED WITH MEDICAL ORGANISATIONS',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '• ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'Maharashtra Medical Council (MMC): ', bold: true, size: 20 }),
                new TextRun({ text: 'MMC20260009088', size: 20 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '• ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'U.P. Medical Council: ', bold: true, size: 20 }),
                new TextRun({ text: '89532/03/06/2020', size: 20 }),
              ],
              spacing: { after: 300 },
            }),

            // Thesis
            new Paragraph({
              text: 'THESIS',
              heading: HeadingLevel.HEADING_2,
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      shading: { fill: 'eff6ff', type: ShadingType.SOLID },
                      margins: {
                        top: 150,
                        bottom: 150,
                        left: 150,
                        right: 150,
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '"Clinicopathological study of Prostatic biopsy of Adenocarcinoma of Prostate"',
                              italics: true,
                              size: 22,
                              color: '1e293b',
                            }),
                          ],
                          spacing: { after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Under the Guidance of Dr. Anitha Padmanabhan (Assistant Professor)',
                              size: 20,
                              color: '64748b',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            // Poster Presentations
            new Paragraph({
              text: 'POSTER PRESENTATIONS AT PATHOLOGY CONFERENCES',
              heading: HeadingLevel.HEADING_2,
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      margins: { top: 120, bottom: 120, left: 120, right: 120 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '"Two Case Reports of Clear Cell Sarcoma in Adolescents Kidneys with Inferior Vena Cava Thrombus"',
                              size: 20,
                              bold: true,
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune',
                              size: 20,
                              color: '2563eb',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      margins: { top: 120, bottom: 120, left: 120, right: 120 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '"Role of Cytology in Metastatic Malignancies to Lymph Nodes"',
                              size: 20,
                              bold: true,
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati',
                              size: 20,
                              color: '2563eb',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            // Conferences
            new Paragraph({
              text: 'CONFERENCES ATTENDED',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '◆ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'MID YEAR CME IN PATHOLOGY (MC-IAPM) 2024, DYPMC, Pimpri Pune', size: 20 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '◆ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'MACYCON 2025, 8th Annual Cytology Conference of ACM, Amravati', size: 20 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '◆ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'Breast Imaging & Interventional Techniques (BRIT) Conference, Department of Pathology, Tata Memorial Hospital, Mumbai', size: 20 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: '◆ ', color: '2563eb', bold: true, size: 20 }),
                new TextRun({ text: 'Histo-Immunotech 2025, TMH Mumbai', size: 20 }),
              ],
              spacing: { after: 300 },
            }),

            // References
            new Paragraph({
              text: 'REFERENCES',
              heading: HeadingLevel.HEADING_2,
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 50, type: WidthType.PERCENTAGE },
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      margins: { top: 150, bottom: 150, left: 150, right: 150 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Dr. Anitha Padmanabhan',
                              bold: true,
                              size: 22,
                              color: '1e293b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Assistant Professor',
                              size: 20,
                              color: '64748b',
                            }),
                          ],
                          spacing: { after: 60 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'LTMMC & GH - Sion',
                              size: 20,
                              color: '64748b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '☎ ',
                              color: '2563eb',
                            }),
                            new TextRun({
                              text: '9820458848',
                              size: 20,
                              color: '2563eb',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      width: { size: 50, type: WidthType.PERCENTAGE },
                      shading: { fill: 'f8fafc', type: ShadingType.SOLID },
                      margins: { top: 150, bottom: 150, left: 150, right: 150 },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Dr. Vaishali Gaikwad',
                              bold: true,
                              size: 22,
                              color: '1e293b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Additional Professor',
                              size: 20,
                              color: '64748b',
                            }),
                          ],
                          spacing: { after: 60 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'LTMMC & GH - Sion',
                              size: 20,
                              color: '64748b',
                            }),
                          ],
                          spacing: { after: 80 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: '☎ ',
                              color: '2563eb',
                            }),
                            new TextRun({
                              text: '9833462578',
                              size: 20,
                              color: '2563eb',
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'Dr_Priya_Prajapati_CV.docx');
  } catch (error) {
    console.error('Error generating DOC:', error);
  }
}