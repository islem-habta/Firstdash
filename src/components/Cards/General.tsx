// ./src/components/Cards/General.tsx
"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { ResponsiveBump, BumpSerie } from "@nivo/bump";

interface DataPoint {
    x: string;
    y: number;
}

interface Serie {
    id: string;
    data: DataPoint[];
}

// Utility to cast Serie[] to BumpSerie<DataPoint, Record<string, unknown>>[]
const castToBumpSeries = (data: Serie[]): BumpSerie<DataPoint, Record<string, unknown>>[] => {
    return data as unknown as BumpSerie<DataPoint, Record<string, unknown>>[];
};

const MyResponsiveBump = ({ data }: { data: Serie[] }) => (
    <ResponsiveBump
        data={castToBumpSeries(data)} // Use the utility function here
        colors={{ scheme: "spectral" }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36,
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "ranking",
            legendPosition: "middle",
            legendOffset: -40,
        }}
        axisRight={null}
    />
);

export default function General() {
    const data: Serie[] = [
        {
            id: "Serie 1",
            data: [
                { x: "2000", y: 12 },
                { x: "2001", y: 4 },
                { x: "2002", y: 9 },
                { x: "2003", y: 4 },
                { x: "2004", y: 2 },
            ],
        },
        {
            id: "Serie 2",
            data: [
                { x: "2000", y: 9 },
                { x: "2001", y: 9 },
                { x: "2002", y: 8 },
                { x: "2003", y: 8 },
                { x: "2004", y: 6 },
            ],
        },
    ];

    return (
        <Card className="w-full h-[300px]">
            <CardHeader>
                <CardTitle>this week</CardTitle>
                <CardDescription>hadou houma nata2ij</CardDescription>
            </CardHeader>
            <CardContent className="h-[200px]">
                <MyResponsiveBump data={data} />
            </CardContent>
        </Card>
    );
}
