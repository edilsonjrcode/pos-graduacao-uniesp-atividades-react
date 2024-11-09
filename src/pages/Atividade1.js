import WithPermission from "../components/WithPermission/WithPermission";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Header from "../components/Header/Header";

const Atividade1 = () => {

    const Settings = () => <div>Página de Configurações</div>;
    const ProtectedSettings = WithPermission(Settings);

    return (

        <>
            <Header />

            <div className='app'>

                <h1>Atividade 1.1</h1>
                <div className='cards'>
                    <ProfileCard
                        name="Francisco Chagas"
                        descricao="Sou engenheiro"
                        linkImg="https://i.pinimg.com/550x/11/bd/42/11bd42ba324ef5e5830c19e25df64ec8.jpg"
                    />

                    <ProfileCard
                        name="Maria Rita"
                        descricao="Sou engenheiro"
                        linkImg="https://dicionariompb.com.br/wp-content/uploads/2021/04/maria-rita.png"
                    />

                    <ProfileCard
                        name="Ariosvaldo Guimarães"
                        descricao="Sou engenheiro"
                        linkImg="https://aventurasnahistoria.com.br/media/_versions/2024/10/homer-capa_widelg.jpg"
                    />

                    <ProfileCard
                        name="Penelope Charmosa"
                        descricao="Sou penelope"
                        linkImg="https://down-br.img.susercontent.com/file/2da426cdcda5c069391f5714014bfc7e"
                    />
                </div>

                <h1>Atividade 1.2</h1>
                <ProtectedSettings hasPermission={false} />

            </div>
        </>

    )
}

export default Atividade1