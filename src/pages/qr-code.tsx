import Qrcodeimg from '../assets/qr-code-plus.png'

export default function QrCode() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden">
                <img src={Qrcodeimg} alt="" />
            </div>
        </div>
    )
}