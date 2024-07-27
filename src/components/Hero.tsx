import { HiOutlineGlobe } from "react-icons/hi";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Hero() {
  return (
    <div className="flex">
        <div className="w-1/2 m-8 border-solid border-2 rounded-lg px-1.5 py-1.5">
            <h1 className="text-5xl font-bold antialiased px-2 py-2">सामुहिक अनुवाद Network</h1>
            <br></br>
            <p>Bridging Knowledge, Connecting Cultures: Learn in Your Language with Samuhik Anuvaad Network</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HiOutlineGlobe size={250} style={{strokeWidth: '0.5'}} />
            </div>
        </div>
        <div className="w-1/12"></div>
        <div className="w-1/2 justify-items-center">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <p className="text-4xl font-bold">In Your Language 😎</p>
                                    <br/>
                                    <p className="font-semibold">Avail free access to community translated courses and break the language barriers to learning!</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <p className="text-4xl font-bold">Certified & Credible ✨</p>
                                    <br/>
                                    <p className="font-semibold">Get certified on the courses you take and open doors to new opportunities.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <p className="text-4xl font-bold">All in One 👊</p>
                                    <br/>
                                    <p className="font-semibold">Access all the major courses provided by various govermental and non-governmental organisations in one place.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <p className="text-4xl font-bold">Made with ❤</p>
                                    <br/>
                                    <p className="font-semibold">Access premium courses with quizzes, projects and certifications originally made in your language of choice.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
  );
}