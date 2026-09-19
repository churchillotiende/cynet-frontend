import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "./Section";
import defaultOnlineSessions from "@/lib/data/DefaultOnline";
import { Button } from "@/components/ui/button";
import defaultClassroom from "@/lib/data/DefaultClassroom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bullet } from "./Bullet";
import { ArrowRight, MapPin } from "lucide-react";
import { ClassroomSession, OnlineSession } from "@/lib/api-client";
import { Link } from "@tanstack/react-router";

interface TrainingOptionsProps {
  slug: string;
}

function TrainingOptions({ slug }: TrainingOptionsProps) {
  const onlineSessions: OnlineSession[] = defaultOnlineSessions;
  const classroomSessions: ClassroomSession[] = defaultClassroom;

  return (
    <Section
      id="options"
      eyebrow="Training Options"
      title="Choose Your Preferred Training Format"
    >
      <p className="mb-6 text-muted-foreground">
        Reserve your spot today — pay when you're ready.
      </p>

      <Tabs defaultValue="online" className="w-full">
        <TabsList className="grid w-full max-w-xl grid-cols-3">
          <TabsTrigger value="online">Live Online</TabsTrigger>
          <TabsTrigger value="classroom">Classroom</TabsTrigger>
          <TabsTrigger value="inhouse">Fly Me a Trainer</TabsTrigger>
        </TabsList>

        {/* Online */}
        <TabsContent value="online" className="mt-6">
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Start</th>
                  <th className="px-4 py-3">End</th>
                  <th className="px-4 py-3">Schedule</th>
                  <th className="px-4 py-3">Fee</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {(onlineSessions.length
                  ? onlineSessions
                  : defaultOnlineSessions
                ).map((s, i) => (
                  <tr key={i} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium">{s.start}</td>
                    <td className="px-4 py-3">{s.end}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {s.schedule}
                    </td>
                    <td className="px-4 py-3 font-semibold">{s.fee}</td>
                    <td className="px-4 py-3 text-right">
                      <Button asChild size="sm">
                        <Link
                          to="/course-registration/$slug/register"
                          params={{ slug }}
                        >
                          Register <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Classroom */}
        <TabsContent value="classroom" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(classroomSessions.length
              ? classroomSessions
              : defaultClassroom
            ).map((s, i) => (
              <Card key={i} className="transition hover:shadow-ßmd">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                    {s.city}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{s.country}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Schedule</span>
                    <span className="font-medium">{s.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{s.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee</span>
                    <span className="font-semibold text-primary">{s.fee}</span>
                  </div>
                  <Button asChild size="sm">
                    <Link
                      to="/course-registration/$slug/register"
                      params={{ slug }}
                    >
                      Enrol <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>{" "}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* In-house */}
        <TabsContent value="inhouse" className="mt-6">
          <Card>
            <CardContent className="p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    We bring the training to your team
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Same accredited curriculum, delivered on-site with case
                    studies built around your team's actual work.
                  </p>
                  <ul className="space-y-3">
                    <Bullet>
                      <strong>Team training</strong> — train your whole team
                      together in a familiar environment.
                    </Bullet>
                    <Bullet>
                      <strong>Fully customized</strong> — content tailored to
                      your industry, tools and challenges.
                    </Bullet>
                    <Bullet>
                      <strong>Cost effective</strong> — save on travel and
                      accommodation when training multiple people.
                    </Bullet>
                    <Bullet>
                      <strong>Flexible scheduling</strong> — pick dates that fit
                      your team's projects.
                    </Bullet>
                  </ul>
                </div>
                <div className="rounded-xl border bg-muted/30 p-6">
                  <h4 className="mb-4 font-semibold">How it works</h4>
                  <ol className="space-y-4 text-sm">
                    {[
                      [
                        "Request a quote",
                        "Tell us your team size, dates and goals.",
                      ],
                      [
                        "Get a custom proposal",
                        "Tailored plan and pricing within 24 hours.",
                      ],
                      ["We come to you", "Certified trainer delivers on-site."],
                    ].map(([t, d], i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold">{t}</p>
                          <p className="text-muted-foreground">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <Button className="mt-6 w-full" asChild>
                    <a href="#enquire">Get a free team quote</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

export default TrainingOptions;
