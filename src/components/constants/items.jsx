import ToggleButton from "../ToggleButton";
import Targets from "../Targets";
import DownloadButton from "../DownloadButton";

export const menu1 = [
  {
    key: "dashboard",
    title: "Dashboard",
    img: "./assets/dashboard.png",
    route: "/",
  },
  {
    key: "reward-coins",
    title: "Reward Coins",
    img: "./assets/reward-coins.png",
    route: "reward-coins",
  },
  {
    key: "referrals",
    title: "Referrals",
    img: "./assets/referrals.png",
    route: "referrals",
  },
  {
    key: "streaks",
    title: "Streaks",
    img: "./assets/streaks.png",
    route: "streaks",
  },
  {
    key: "contests",
    title: "Contests",
    img: "./assets/contests.png",
    route: "contests",
  },
  {
    key: "events",
    title: "Events",
    img: "./assets/events.png",
    route: "events",
  },
];
export const menu2 = [
  {
    key: "settings",
    title: "Settings",
    img: "./assets/settings.png",
    route: "settings",
  },
  {
    key: "support",
    title: "Support",
    img: "./assets/support.png",
    route: "support",
  },
];
export const menu3 = [
  {
    key: "view-analytics",
    title: "View Analytics",
    route: "view-analytics",
  },
  {
    key: "manage-contests",
    title: "Manage Contests",
    route: "manage-contests",
  },
  {
    key: "award-bonuses",
    title: "Award Bonuses",
    route: "award-bonuses",
  },
];

export const columns = [
  {
    name: "Contest Name",
    selector: (row) => row.contest_name,
    sortable: true,
  },
  {
    name: "Active Status",
    selector: (row) => row.active_status,
  },
  {
    name: "Validity",
    selector: (row) => row.validity,
    sortable: true,
  },
  {
    name: "Challenges",
    selector: (row) => row.challenges,
  },
  {
    name: "Target Audience",
    selector: (row) => row.target_audience,
  },
];

export const data = [
  {
    id: 1,
    contest_name: "Rule with a simple name",
    active_status: <ToggleButton label1="Active" label2="Inactive" />,
    validity: "20 Jan 2022 → 20 Jul 2023",
    challenges: <Targets />,
    target_audience: <Targets />,
  },
  {
    id: 2,
    contest_name: "Rule with a longer name",
    active_status: <ToggleButton label1="Active" label2="Inactive" />,
    validity: "20 Jan 2022 → 20 Jul 2023",
    challenges: <Targets />,
    target_audience: <DownloadButton />,
  },
  {
    id: 3,
    contest_name: "Rule with a simple name",
    active_status: <ToggleButton label1="Active" label2="Inactive" />,
    validity: "20 Jan 2022 → 20 Jul 2023",
    challenges: <Targets />,
    target_audience: <Targets />,
  },
  {
    id: 4,
    contest_name: "Rule with a longer name",
    active_status: <ToggleButton label1="Active" label2="Inactive" />,
    validity: "20 Jan 2022 → 20 Jul 2023",
    challenges: <Targets />,
    target_audience: <DownloadButton />,
  },
];

export const targets = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 1,
  },
  {
    id: 3,
    value: 1,
  },
  {
    id: 4,
    value: 1,
  },
  {
    id: 5,
    value: 1,
  },
  {
    id: 6,
    value: 1,
  },
];
