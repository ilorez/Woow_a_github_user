import React from 'react';

type GitHubUser = {
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
};

function User({ avatar_url, bio, name, login }: GitHubUser) {
  return (
    <div className=" w-full bg-gray-50 shadow-lg px-16 py-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <a
            href={`http://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={avatar_url}
              alt="github profile avatar"
              width={200}
              className="rounded-full"
            />
          </a>
        </div>
        <div className="flex  items-center justify-center w-full flex-wrap">
          <p>
            {login} <span className="text-gray-400">({name})</span>
          </p>
        </div>
        <div className="flex flex-col  items-center justify-center w-full">
          <p className="pl-2 font-bold">{bio}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 mt-4 [&>img]:h-full">
        <img
          alt={login}
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${login}&show_icons=true&card_width=500&theme=dark`}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${login}&layout=compact&langs_count=20&card_width=550&theme=dark`}
          alt={login}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${login}\&show_icons=true\&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&theme=dark`}
          alt={login}
        />
      </div>
    </div>
  );
}

export default User;
