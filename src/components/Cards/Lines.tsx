"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }: { data: any }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        
    />
)
export default function Lines() {
    const data = [
        {
          "id": "japan",
          "color": "hsl(338, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 97
            },
            {
              "x": "helicopter",
              "y": 208
            },
            {
              "x": "boat",
              "y": 298
            },
            {
              "x": "train",
              "y": 121
            },
            {
              "x": "subway",
              "y": 292
            },
            {
              "x": "bus",
              "y": 38
            },
            {
              "x": "car",
              "y": 90
            },
            {
              "x": "moto",
              "y": 260
            },
            {
              "x": "bicycle",
              "y": 66
            },
            {
              "x": "horse",
              "y": 86
            },
            {
              "x": "skateboard",
              "y": 122
            },
            {
              "x": "others",
              "y": 42
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(39, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 188
            },
            {
              "x": "helicopter",
              "y": 180
            },
            {
              "x": "boat",
              "y": 147
            },
            {
              "x": "train",
              "y": 61
            },
            {
              "x": "subway",
              "y": 35
            },
            {
              "x": "bus",
              "y": 56
            },
            {
              "x": "car",
              "y": 176
            },
            {
              "x": "moto",
              "y": 138
            },
            {
              "x": "bicycle",
              "y": 136
            },
            {
              "x": "horse",
              "y": 59
            },
            {
              "x": "skateboard",
              "y": 57
            },
            {
              "x": "others",
              "y": 247
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(130, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 259
            },
            {
              "x": "helicopter",
              "y": 182
            },
            {
              "x": "boat",
              "y": 194
            },
            {
              "x": "train",
              "y": 174
            },
            {
              "x": "subway",
              "y": 207
            },
            {
              "x": "bus",
              "y": 271
            },
            {
              "x": "car",
              "y": 139
            },
            {
              "x": "moto",
              "y": 196
            },
            {
              "x": "bicycle",
              "y": 208
            },
            {
              "x": "horse",
              "y": 92
            },
            {
              "x": "skateboard",
              "y": 280
            },
            {
              "x": "others",
              "y": 130
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(338, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 83
            },
            {
              "x": "helicopter",
              "y": 155
            },
            {
              "x": "boat",
              "y": 7
            },
            {
              "x": "train",
              "y": 218
            },
            {
              "x": "subway",
              "y": 128
            },
            {
              "x": "bus",
              "y": 290
            },
            {
              "x": "car",
              "y": 219
            },
            {
              "x": "moto",
              "y": 164
            },
            {
              "x": "bicycle",
              "y": 290
            },
            {
              "x": "horse",
              "y": 36
            },
            {
              "x": "skateboard",
              "y": 292
            },
            {
              "x": "others",
              "y": 213
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(110, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 56
            },
            {
              "x": "helicopter",
              "y": 211
            },
            {
              "x": "boat",
              "y": 171
            },
            {
              "x": "train",
              "y": 255
            },
            {
              "x": "subway",
              "y": 145
            },
            {
              "x": "bus",
              "y": 158
            },
            {
              "x": "car",
              "y": 240
            },
            {
              "x": "moto",
              "y": 278
            },
            {
              "x": "bicycle",
              "y": 141
            },
            {
              "x": "horse",
              "y": 185
            },
            {
              "x": "skateboard",
              "y": 291
            },
            {
              "x": "others",
              "y": 223
            }
          ]
        }
      ]
      return (
        <Card className='w-full h-[300px]'>
            <CardHeader>
                
            </CardHeader>
            <CardContent className='h-[300px] flex items-center w-full'>
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    )
}