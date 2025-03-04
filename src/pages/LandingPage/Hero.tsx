export default function Hero() {
    return (
        <section className="bg-teal-50 p-6 text-center relative flex gap-4 px-20">
            <div className="w-[60%]">
                <img src="/images/hero.png" alt="hero" className="" width={500} />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-2 text-left" >Tukar, Jual, Perbaiki — Beri Hidup Baru pada Bajumu!</h2>
                <div className="flex gap-4">
                    <a href="" className="bg-teal-600 text-white px-4 py-2 rounded-lg">Cari Match</a>
                    <a href="" className="border border-teal-600 text-teal-600 px-4 py-2 rounded-lg">Cara kerjanya</a>
                </div>
            </div>
        </section>
    )
}