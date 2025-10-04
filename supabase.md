now connect supabase and fetch the tables cars


VITE_SUPABASE_URL=https://kgstuurlhljfqbxtndcw.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnc3R1dXJsaGxqZnFieHRuZGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MjAwODUsImV4cCI6MjA1ODk5NjA4NX0.XZECnAv6cGCzUBHjnW-N1Xw2RCEC8HNipVNjicEAeE8


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        
 
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
export default Page
       

From tables cars bring only agency name = aggelos rentals
Match then the photos from the folder fleet src\assets\fleet

Make sure , you create a fleet page with the filters from the supabase category, and then you create the fleet detailed page for each one, diferenet for category if its car or bike. all the fleet must have a book now button to our exteranal URL.

step by step. 

beautiful page + seo + faqs + category description + proper fonts and gallery.

