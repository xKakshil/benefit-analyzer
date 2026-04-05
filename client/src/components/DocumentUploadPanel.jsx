import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';

const UploadBox = ({ onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border rounded-[32px] p-12 text-center cursor-pointer
        transition-all duration-300 backdrop-blur-xl
        bg-white/5 shadow-2xl
        ${
          isDragActive
            ? 'border-blue-500 bg-blue-500/10 scale-[1.01]'
            : 'border-white/10 hover:border-blue-500/50 hover:bg-white/10'
        }
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <UploadCloud className="w-10 h-10 text-blue-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Upload Closing Disclosure PDF
          </h2>

          <p className="text-slate-400 mt-3 text-lg">
            Drag & drop your file here or click to browse
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadBox;