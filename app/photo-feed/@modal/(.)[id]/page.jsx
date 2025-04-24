import Modal from "@/app/components/Modal.jsx";
import wondersImages from "../../wonders.js";
import Image from "next/image";

export default async function PhotoModal({ params }) {
    const id = (await params).id;
    const photo = wondersImages.find((p) => p.id === id);

    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />

            <div className="bg-white text-black p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    );
}
