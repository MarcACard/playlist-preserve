import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas/waitlist.schema";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { email } = parsed.data;
  const { error } = await supabase.from("waitlist_entries").insert({ email });

  if (error) {
    // Duplicate email --> 'duplicate key value violates unique constraint "waitlist_entries_email_key"'
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "Already on the Waitlist" },
        { status: 200 }
      );
    }
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
