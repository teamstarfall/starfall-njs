export type TeamMember = {
  id: number;
  name: String;
  aka: String;
  tagline: String;
  socials: Social[];
  _imgname: String;
  bg_color: String;
};

export type Social = {
  name: String;
  url: String;
};
