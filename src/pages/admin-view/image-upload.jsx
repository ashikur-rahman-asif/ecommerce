import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { useRef } from "react";

const ProductImageUpload = ({
  file,
  setFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (event) => {
    console.log(event.target.files[0]);
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleRemoveImage=()=>{
    setFile(null)
    if (inputRef.current) {
        inputRef.current.value=""
    }
  }
  return (
    <div className="w-full mx-auto ">
      <Label className="text-lg font-semibold mb-2 block">Upload</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed p-4 rounded-sm">
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!file ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer">
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag and Drop or click to upload</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-9 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{file.name}</p>
            <Button
            onClick={handleRemoveImage}
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground">
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageUpload;
