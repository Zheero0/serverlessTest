"use client"
export default function Home() {

  const recipient = {
    name: "Real Nig",
    email: "rehans.axis@gmail.com",
  }

  const handleMail = async () => {
    console.log("Sending mail");
    await fetch("/api/send-mail", {
      method: "POST",
      headedrs: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
      }),
    })
  };


  return (
    <div>
    <button onClick={handleMail} 
    className="bg-red-500 px-2 py-1 "
    >Handle Click</button>
    </div>
  );
}
