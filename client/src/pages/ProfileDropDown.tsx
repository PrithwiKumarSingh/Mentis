import {motion} from "motion/react"
import { TbWorldShare } from "react-icons/tb";
import {
  Settings,
  Moon,
  LogOut,
} from "lucide-react";
import { useTheme } from "../components/Embed/ThemeContext";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import axios from "axios";

type Props = {
  user: {
    name: string | undefined;
    email: string | undefined;
    avatar: string;
    hash:string | null;
  };
};

export default function ProfileDropDown({ user }: Props) {
  const { theme, toggleTheme } = useTheme();
  const [hash, setHash] = useState<string|null>(user.hash)

  useEffect(() => {
  setHash(user.hash);
}, [user.hash]);

  async function StopSharingBrain(){
      try{

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {"share" : false}, {withCredentials : true})
        setHash(response.data.hash)
        toast("Stop Sharing Brain", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
      }catch(err){
        toast("Internal Server Error", {
                position : "bottom-right",
                theme : "colored",
                type : "error", 
                transition: Slide,
                autoClose : 3000
            })
      }
    }

  return (
    <div>{
        true && 
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
     className="absolute bg-[#E0E7FF] right-10 top-36 w-90 overflow-hidden  font-semibold text-slate-800 dark:text-white dark:bg-linear-to-bl from-slate-900 to-[#06071B] rounded-3xl backdrop-blur-md border border-white/20 shadow-lg transition-all">

      {/* Header */}

      <div className="p-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#222022] dark:bg-[#0D1529] px-4 py-3 shadow-inner">

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

        <div className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-4 transition hover:bg-black/5 dark:hover:bg-white/5">

          <div className={`flex items-center gap-4 ${hash ? "text-white" : "text-green-400"}`} >

            <TbWorldShare size={22} />

            <span className="text-xl text-white">
              Stop Sharing
            </span>

          </div>

          {/* Stop Sharing Brain */}

          <button
            onClick={StopSharingBrain}
            className={`relative h-8 w-14 rounded-full transition cursor-pointer ${
              hash == null ? "bg-slate-600" : "bg-green-400"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                hash ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>

        <div className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-4 transition hover:bg-black/5 dark:hover:bg-white/5">

          <div className="flex items-center gap-4">

            <Moon size={22} />

            <span className="text-xl">
              Dark mode
            </span>

          </div>

          {/* Toggle */}

          <button
            onClick={toggleTheme}
            className={`relative h-8 w-14 rounded-full transition cursor-pointer ${
              theme==='light' ? "bg-slate-600" : "bg-zinc-700"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                theme==='dark' ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>

      </div>

      <div className="border-t border-black/10 dark:border-white/10">

        <button className="flex w-full items-center gap-4 px-8 py-5 text-left transition cursor-pointer hover:bg-red-500/10 hover:text-red-400">

          <LogOut size={22} />

          <span className="text-xl">
            Logout
          </span>

        </button>

      </div>
    </motion.div>
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
    <button className="flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
      {icon}
      <span className="text-xl">{text}</span>
    </button>
  );
}