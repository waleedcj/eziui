import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { MyIcons } from "@/assets/images/svg/icons";

type PreviewQRProps = {
	previewUrl: string;
};

const PreviewQR: React.FC<PreviewQRProps> = ({ previewUrl }) => {
	return (
		<div className="max-w-md w-full p-6">
			<div className="text-center">
				{/* <img src="/expo-logo.png" alt="Expo" className="h-8 mx-auto mb-4" /> */}
                <MyIcons.ExpoIcon className="h-8 mx-auto mb-4" />

				<h2 className="text-white text-xl font-semibold mb-6">
					Preview on your own mobile device
				</h2>

				<ol className="text-gray-300 mb-6 space-y-2">
					<li>1. Install Expo Go</li>
					<li>2. Scan this QR code</li>
				</ol>

				<div className="bg-[#2C2C2C] rounded-md p-4 mb-6">
					<p className="text-gray-400 text-sm">
						Use the code scanner app on iOS or Expo Go on Android
					</p>
				</div>

				<div className="bg-white p-4 rounded-lg inline-block mx-auto">
					<React.Suspense fallback={<>Loading!!!!</>}>
						<QRCodeSVG value={previewUrl} size={200} level="H" />
					</React.Suspense>
				</div>
			</div>
		</div>
	);
};

export default PreviewQR;
