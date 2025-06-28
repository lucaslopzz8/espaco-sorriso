
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yztccxtalewgtzqsffcx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dGNjeHRhbGV3Z3R6cXNmZmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNzcxODEsImV4cCI6MjA2NjY1MzE4MX0.W-v0c19NCuAuHudrHgO29innjgh-OPKh_Ie0uhqJPtA';

export const supabase = createClient(supabaseUrl, supabaseKey);
