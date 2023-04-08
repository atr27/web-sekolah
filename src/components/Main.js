import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/praktikumtkj.jpg";
import jurusan2 from "./../assets/Lab-Kimia.jpg";
import jurusan3 from "./../assets/akuntansi.jpg";
import kegiatan1 from "./../assets/kegiatan1.jpg";
import kegiatan2 from "./../assets/kegiatan2.jpg";
import kegiatan3 from "./../assets/kegiatan3.jpg";

const Main = () =>{
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Kejuruan</h1>
                    </div>
                </div>
                <div className="row container justify-content-center mx-auto">
                    <div className="col-lg-4 col-12 text-center my-4">
                        <Cardjurusan image={jurusan1} jurusan="Teknik Komputer Jaringan" description="Teknik Komputer Jaringan atau yang biasa disingkat TKJ adalah jurusan di SMK yang mempelajari tentang cara merakit komputer, jaringan dasar, dan komponen hardware yang ada di dalam komputer"/>
                    </div>
                    <div className="col-lg-4 col-12 text-center my-4">
                        <Cardjurusan image={jurusan2} jurusan="Analis Kimia" description="Seperti namanya, jurusan kimia analisis memang memiliki fokus pada ilmu kimia. Untuk jurusan ini sendiri adalah cabang kimia yang berhubungan dengan pengembangan dan penggunaan teknik dalam pengukuran kimia"/>
                    </div>
                    <div className="col-lg-4 col-12 text-center my-4">
                        <Cardjurusan image={jurusan3} jurusan="Akuntansi" description="Jurusan Akuntansi adalah bidang studi yang mempelajari materi terkait metode pencatatan dan penyusunan laporan keuangan yang berguna membantu pemangku kepentingan dalam proses pengambilan keputusan"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12">
                        <Cardkegiatan image={kegiatan3} description="Kegiatan upacara yang dilakukan rutin setiap hari senin"/>
                    </div>
                    <div className="col-12 mt-4">
                        <Cardkegiatan image={kegiatan2} description="Kegiatan jumat rohani yang dilaksanakan setiap hari jumat pada pagi hari"/>
                    </div>
                    <div className="col-12 mt-4">
                        <Cardkegiatan image={kegiatan1} description="Kegiatan lomba yang diikuti seluruh siswa di sekolah dengan pemberian sertifikat dan hadiah bagi para pemenang lomba"/>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Main;