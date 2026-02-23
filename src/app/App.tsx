import { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { CVContent } from './components/CVContent';
import { downloadAsPDF, downloadAsDOC } from './utils/downloadCV';
import { Button } from './components/ui/button';

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadType, setDownloadType] = useState<'pdf' | 'doc' | null>(null);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    setDownloadType('pdf');
    await downloadAsPDF();
    setIsDownloading(false);
    setDownloadType(null);
  };

  const handleDownloadDOC = async () => {
    setIsDownloading(true);
    setDownloadType('doc');
    await downloadAsDOC();
    setIsDownloading(false);
    setDownloadType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header with Download Buttons */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Curriculum Vitae</h1>
            <p className="text-sm text-gray-600">Dr. Priya Prajapati</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isDownloading && downloadType === 'pdf' ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Download className="w-4 h-4 mr-2" />
              )}
              Download PDF
            </Button>
            {/* <Button
              onClick={handleDownloadDOC}
              disabled={isDownloading}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              {isDownloading && downloadType === 'doc' ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <FileText className="w-4 h-4 mr-2" />
              )}
              Download DOC
            </Button> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <CVContent />
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Click the download buttons above to save this CV as PDF or DOC format</p>
        </div>
      </div>
    </div>
  );
}
