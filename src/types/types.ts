export interface ApiResponse {
  gallery: {
    fields: {
      file: {
        url: string;
      };
    };
    sys: {
      id: string;
    };
  }[];
  avatar: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  onlyfansNick: string;
  onlyfansLink: string;
  age: string;
}

export interface Content {
  images: {
    url: string;
    id: string;
  }[];
  avatarUrl: string;
  nick: string;
  link: string;
  age: string;
}
