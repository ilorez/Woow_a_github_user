export type UserInterface = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
};

const template: UserInterface = {
  avatar_url: 'https://avatars.githubusercontent.com/u/117188991?v=4',
  bio: 'a full-stack developer.',
  blog: '',
  company: null,
  created_at: '2022-11-01T14:46:37Z',
  email: null,
  events_url: 'https://api.github.com/users/ilorez/events{/privacy}',
  followers: 7,
  followers_url: 'https://api.github.com/users/ilorez/followers',
  following: 11,
  following_url: 'https://api.github.com/users/ilorez/following{/other_user}',
  gists_url: 'https://api.github.com/users/ilorez/gists{/gist_id}',
  gravatar_id: '',
  hireable: null,
  html_url: 'https://github.com/ilorez',
  id: 117188991,
  location: 'Marrakech',
  login: 'ilorez',
  name: 'Zobair Najdaoui',
  node_id: 'U_kgDOBvwpfw',
  organizations_url: 'https://api.github.com/users/ilorez/orgs',
  public_gists: 7,
  public_repos: 34,
  received_events_url: 'https://api.github.com/users/ilorez/received_events',
  repos_url: 'https://api.github.com/users/ilorez/repos',
  site_admin: false,
  starred_url: 'https://api.github.com/users/ilorez/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/ilorez/subscriptions',
  twitter_username: null,
  type: 'User',
  updated_at: '2024-02-15T22:25:03Z',
  url: 'https://api.github.com/users/ilorez'
};

export { template };