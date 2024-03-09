"use client";

import { SetStateAction, Dispatch } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType
);

interface Job {
	id: string;
	state: string; // Current processing state uploading | processing | completed | failed
	step: number; // processing step 1, 2, 3
	error?: string;
}

function DragNdrop({
	setFiles,
	files,
}: {
	setFiles: Dispatch<SetStateAction<never[]>>;
	files: any;
}) {
	return (
		<div className="flex flex-col gap-5">
			<div className="bg-[#202025] p-3 rounded-lg">
				<h2 className="font-normal mb-1 text-text-12">Status</h2>
				<div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2">
					<span className="text-text-12 flex items-center gap-1 font-medium text-mid--yellow">
						Resume.pdf pending
						<LoadingSpinner />
					</span>
					<span className="text-text-12 font-medium text-crimson">
						Resume.pdf Failed
					</span>
					<span className="text-text-12 font-medium text-brand-green">
						Resume.pdf successful
					</span>
				</div>
			</div>
			<FilePond
				files={files}
				allowReorder={true}
				allowMultiple={true}
				onupdatefiles={setFiles as any}
				acceptedFileTypes={[
					"application/vnd.ms-excel",
					// "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
					"application/pdf",
				]}
				server={{
					process: {
						url: "/upload", //url to post files
						method: "POST",
						headers: {
							//auth headers
						},
					},
				}}
				onprocessfile={(error, file) => {
					if (error) {
						console.log(error);
					}
				}}
				labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
			/>
		</div>
	);
}

export default DragNdrop;

// File Format	MIME Type

// CSV (Comma-Separated Values)	application/vnd.ms-excel, text/csv
// XLSX (Microsoft Excel Open XML Format)	application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
// PDF (Portable Document Format)	application/pdf
// QIF (Quicken Interchange Format)	application/vnd.quicken
// OFX (Open Financial Exchange)	application/ofx
// HBCI (Home Banking Computer Interface)	application/vnd.hbci
// MT940 (Bank Statement Format)	application/x-mt940
// CAMT (Cash Account Management Transaction)	application/xml
// MT942 (Bank to Customer Transaction Information)	application/x-mt942
