import './profile-card.scss';
import profilePhoto from '@/assets/profile-photo.jpeg';

function ProfileCard() {
  const experienceMs: number =
    new Date().getTime() - new Date(2022, 4).getTime();
  const experienceYears: number = Math.floor(
    experienceMs / 1000 / 60 / 60 / 24 / 365
  );

  return (
    <div className="profile-container">
      <img className="photo" src={profilePhoto} />
      <div className="profile-summary">
        <h3>About me</h3>
        <p>
          I have {experienceYears}+ years of experience developing reliable
          software that I take pride in.
        </p>
        <p>
          I specialize in distributed data pipelines and building internal tools
          to provide shortcuts to common tasks.
        </p>
        <p>
          If I'm not at my computer, you will likely find me trail running
          somewhere in the Northeast or spending the day outside with friends.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
