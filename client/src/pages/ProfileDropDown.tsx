import { useState } from "react";
import {
  Settings,
  LayoutGrid,
  Moon,
  LogOut,
  ChevronDown,
} from "lucide-react";

type Props = {
  user: {
    open : boolean;
    name: string;
    email: string;
    avatar: string;
  };
};

export default function ProfileDropDown({ user }: Props) {
  const [dark, setDark] = useState(true);

  return (
    <div>{
        user.open && 
    <div className="absolute right-10 top-36 w-90 overflow-hidden rounded-3xl border border-white/10 bg-[#181516]/95 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-xl">

      {/* Header */}

      <div className="p-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#222022] px-4 py-3 shadow-inner">

          <div className="flex items-center gap-4">

            <div className="relative">
              <img
                src={user.avatar}
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />

              <span className="absolute -bottom-0.5 right-1 h-4 w-4 rounded-full border-2 border-[#222022] bg-green-500" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-white">
                  {user.name}
                </h2>
              </div>

              <p className="text-zinc-400 text-sm">
                {user.email}
              </p>
            </div>

          </div>

          {/* <span className="rounded-xl bg-lime-300 px-2 py-2 text-sm font-semibold text-black">
            PRO
          </span> */}
        </div>
      </div>

      {/* Menu */}

      <div className="px-4 pb-3">

        <MenuItem
          icon={<Settings size={22} />}
          text="Account Settings"
        />

        <MenuItem
          icon={<LayoutGrid size={22} />}
          text="Integrations"
        />

        <div className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-4 transition hover:bg-white/5">

          <div className="flex items-center gap-4 text-white">

            <Moon size={22} />

            <span className="text-xl">
              Dark mode
            </span>

          </div>

          {/* Toggle */}

          <button
            onClick={() => setDark(!dark)}
            className={`relative h-8 w-14 rounded-full transition ${
              dark ? "bg-slate-600" : "bg-zinc-700"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                dark ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>

      </div>

      <div className="border-t border-white/10">

        <button className="flex w-full items-center gap-4 px-8 py-5 text-left text-white transition hover:bg-red-500/10 hover:text-red-400">

          <LogOut size={22} />

          <span className="text-xl">
            Logout
          </span>

        </button>

      </div>
    </div>
    }
    </div>
  );

}

function MenuItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left text-white transition hover:bg-white/5">
      {icon}
      <span className="text-xl">{text}</span>
    </button>
  );
}