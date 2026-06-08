import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="relative py-25 bg-gray-900 overflow-hidden">
      <div
  aria-hidden="true"
  className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
>
  <div
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    }}
    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
  />


</div>


      <div data-aos-delay="100" className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl pt-14 mx-auto">
          {/* contact info */}
          <div className="space-y-8">
            <div>
              <h3
                data-aos-delay="200"
                className="text-2xl text-gray-400 font-semibold mb-4"
              >
                Let&apos;s talk
              </h3>
              <p data-aos-delay="200" className="text-muted-foreground">
                I&apos;am always open to discussing new projects, creative
                ideas, or opportunities to be part of your vision
              </p>
            </div>
            <div data-aos-delay="200" className="space-y-4">
              {contactInfo.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-yellow-600/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <item.icon className="w-5 h-5  text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium  text-gray-400">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            {/* social icons */}
            <div>
              <h4
                data-aos-delay="400"
                className="text-lg font-medium mb-4 text-gray-400"
              >
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      className="w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center  hover:text-blue-500 dark:text-yellow-300 dark:hover:text-yellow-600 transition-colors"
                    >
                      <link.icon className="w-5 h-5 " />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* contatc form */}
          <div>
            <form
              data-aos-delay="150"
              className=" bg-gray-800 rounded-2xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Chisom Banda"
                    required
                    className="bg-gray-700 dark:bg-yellow-200/10"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="Email"
                    className="text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="bg-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm text-gray-400 font-medium"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="bg-gray-700 "
                />
              </div>
              <div data-aos-delay="300" className=" space-y-4 ">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400 font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project.... "
                  rows={5}
                  required
                  className="bg-gray-700 h-40"
                />
              </div>
              <Button
                type="submit"
                size={"lg"}
                className="w-full cursor-pointer bg-yellow-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Messsge
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
