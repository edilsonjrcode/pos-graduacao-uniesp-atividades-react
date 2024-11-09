import '../ProfileCard/ProfileCardStyle.css'

const ProfileCard = ({name, descricao, linkImg}) => (
    <div className='profile-card'>
        <img src={linkImg} alt={`${name} perfil`} />
        <div className='titles'>
            <h2>{name}</h2>
            <p>{descricao}</p>
        </div>
    </div>
)

export default ProfileCard