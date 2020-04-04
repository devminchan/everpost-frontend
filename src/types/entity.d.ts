interface Post {
  id: number;
  title: string;
  content: string;
  createDate: string | Date;
  modifyDate: string | Date;
}

interface User {
  id: number;
  username: string;
  email: string;
  profileImage?: string;
  createDate: string | Date;
  modifyDate: string | Date;
}
