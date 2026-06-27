import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function StatisticsChart({
    patients,
    doctors,
    appointments,
    users,
}) {

    const data = {
        labels: [
            "Patients",
            "Doctors",
            "Appointments",
            "Users",
        ],
        datasets: [
            {
                label: "Hospital Statistics",
                data: [
                    patients,
                    doctors,
                    appointments,
                    users,
                ],
                backgroundColor: [
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Hospital Overview",
            },
        },
    };

    return <Bar options={options} data={data} />;
}