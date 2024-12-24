import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://scuqkocaigammltgzsqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdXFrb2NhaWdhbW1sdGd6c3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNTIwOTMsImV4cCI6MjA1MDYyODA5M30.ZLVADSfwm5CXJ6eylL3q59eOGoGeto7jtnp-EAqAz8A';

export const supabase = createClient(supabaseUrl, supabaseKey);
