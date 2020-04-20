interface LoginRequest {
  email: string;
  password: string;
}

interface SignUpRequest extends LoginRequest {
  username: string;
}

interface CreatePostRequest {
  title: string;
  content: string;
}

interface UpdatePostRequest {
  id: number;
  title: string;
  content: string;
}
