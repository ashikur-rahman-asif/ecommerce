import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { addNewProduct, fetchAllProducts } from "@/store/admin/product-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductImageUpload from "./image-upload";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const {productList}= useSelector(state=>state.adminProducts)

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    dispatch(addNewProduct({
      ...formData,
      image:uploadedImageUrl
    }))
    .then((data)=>{
      console.log(data)
      // if(data?.payload)
    })
  };


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  
  console.log(productList,"productList")
  return (
    <>
      <div className="mb-5 flex justify-end w-full">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add new product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
              buttonText="Add"
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AdminProducts;
