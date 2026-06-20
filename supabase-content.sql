-- Content CMS table
CREATE TABLE IF NOT EXISTS content (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page text NOT NULL,
  section text NOT NULL,
  field text NOT NULL,
  value text DEFAULT '',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page, section, field)
);

-- RLS
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read content" ON content
  FOR SELECT USING (true);

CREATE POLICY "Service role can manage content" ON content
  FOR ALL USING (auth.role() = 'service_role');

-- Seed default content
INSERT INTO content (page, section, field, value) VALUES
  -- Home
  ('home','hero','heading','Crafting\ndigital'),
  ('home','hero','accent','experiences'),
  ('home','hero','subtext','Designer & creative director focused on brand, identity, and digital product.'),
  ('home','stats','stat1_number','8+'),
  ('home','stats','stat1_label','Years Experience'),
  ('home','stats','stat2_number','60+'),
  ('home','stats','stat2_label','Projects Delivered'),
  ('home','stats','stat3_number','30+'),
  ('home','stats','stat3_label','Happy Clients'),

  -- About
  ('about','hero','heading','Design is\nhow I think'),
  ('about','hero','body1','I''m a designer and creative director based in [City]. I help brands find their voice, build their visual identity, and create digital experiences that resonate.'),
  ('about','hero','body2','With over 8 years working across brand, product, and digital — I bring a systems-thinking approach to every project, making sure every detail serves the whole.'),

  -- Services
  ('services','hero','heading','What I\nOffer'),
  ('services','hero','subtext','Focused, high-quality design work for brands that want to stand out.'),
  ('services','card1','title','Brand Identity'),
  ('services','card1','desc','Logo, typography, color systems, and brand guidelines that give your business a clear, consistent visual voice.'),
  ('services','card2','title','Web Design'),
  ('services','card2','desc','High-converting, beautifully designed websites that reflect your brand and work hard for your business.'),
  ('services','card3','title','Creative Direction'),
  ('services','card3','desc','Strategic creative leadership for campaigns, launches, and brand moments that need to make an impact.'),
  ('services','card4','title','Design Systems'),
  ('services','card4','desc','Scalable component libraries and design tokens that keep your product consistent as it grows.'),
  ('services','cta','heading','Ready to start?'),
  ('services','cta','subtext','Tell me about your project and let''s figure out how I can help.'),

  -- Contact
  ('contact','hero','heading','Let''s work\ntogether'),
  ('contact','hero','subtext','Have a project in mind? I''d love to hear about it. Fill out the form and I''ll get back to you within 1–2 business days.'),
  ('contact','info','email','hello@ocular.design'),
  ('contact','info','location','Your City, Country'),
  ('contact','info','availability','Open to new projects'),

  -- Blog
  ('blog','hero','heading','Thoughts &\nWriting'),
  ('blog','hero','subtext','On design, branding, creative process, and the occasional tangent.')

ON CONFLICT (page, section, field) DO NOTHING;
