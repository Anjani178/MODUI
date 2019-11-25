export class MentorObj {
    mid;
        mUserName;
        mEmail;
        mPassword;
        contact;
        facilities;
        technologies;
        role;
        timeSlot;
        linkedinUrl;
        yearOfExperience;
        active;
        constructor(){
        this.active="True";
        this.role="Mentor";
        this.mid = "M" + Math.round((Math.random()*9000));
    }

}
