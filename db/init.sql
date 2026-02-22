CREATE TABLE IF NOT EXISTS home_key_tracks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  href TEXT NOT NULL,
  icon_key TEXT NOT NULL CHECK (icon_key IN ('building', 'globe', 'cloud', 'file')),
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO home_key_tracks (title, description, href, icon_key, display_order, is_active)
SELECT
  'Company Profile',
  'Institutional delivery support for government digital initiatives, consulting, and implementation services.',
  '/about',
  'building',
  1,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM home_key_tracks WHERE title = 'Company Profile');

INSERT INTO home_key_tracks (title, description, href, icon_key, display_order, is_active)
SELECT
  'National & International Projects',
  'Project support model spanning domestic assignments and international collaboration-oriented engagements.',
  '/services',
  'globe',
  2,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM home_key_tracks WHERE title = 'National & International Projects');

INSERT INTO home_key_tracks (title, description, href, icon_key, display_order, is_active)
SELECT
  'Cloud Services',
  'Managed cloud and hosting-oriented services for secure, scalable public systems.',
  '/services',
  'cloud',
  3,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM home_key_tracks WHERE title = 'Cloud Services');

INSERT INTO home_key_tracks (title, description, href, icon_key, display_order, is_active)
SELECT
  'Tender Information',
  'Notices, bid-related updates, and process references for participating organizations.',
  '/tenders',
  'file',
  4,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM home_key_tracks WHERE title = 'Tender Information');

CREATE TABLE IF NOT EXISTS header_announcements (
  id SERIAL PRIMARY KEY,
  notice_text TEXT NOT NULL,
  href TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO header_announcements (notice_text, href, display_order, is_active)
SELECT
  'Corrigendum issued for cloud infrastructure tender batch Q1-2026.',
  '/tenders',
  1,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM header_announcements WHERE notice_text = 'Corrigendum issued for cloud infrastructure tender batch Q1-2026.');

INSERT INTO header_announcements (notice_text, href, display_order, is_active)
SELECT
  'Updated vendor document checklist published under circulars.',
  '/circulars',
  2,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM header_announcements WHERE notice_text = 'Updated vendor document checklist published under circulars.');

INSERT INTO header_announcements (notice_text, href, display_order, is_active)
SELECT
  'Career opportunities open for project and security operations teams.',
  '/career',
  3,
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM header_announcements WHERE notice_text = 'Career opportunities open for project and security operations teams.');

CREATE TABLE IF NOT EXISTS contact_details (
  id SERIAL PRIMARY KEY,
  office_name TEXT NOT NULL,
  address_line_1 TEXT NOT NULL,
  address_line_2 TEXT,
  phone_primary TEXT,
  phone_secondary TEXT,
  phone_tertiary TEXT,
  email_primary TEXT,
  email_secondary TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO contact_details (
  office_name,
  address_line_1,
  address_line_2,
  phone_primary,
  phone_secondary,
  phone_tertiary,
  email_primary,
  email_secondary,
  is_active
)
SELECT
  'National Informatics Centre Services Incorporated',
  '6th Floor (Hall No. 2 & 3), NBCC Tower, 15 Bhikaji Cama Place, New Delhi - 110066',
  NULL,
  '+91-11-22900525',
  '+91-11-22900523',
  '8527625551',
  'info-nicsi@nic.in',
  'mdnicsi@nic.in',
  TRUE
WHERE NOT EXISTS (SELECT 1 FROM contact_details);

CREATE TABLE IF NOT EXISTS footer_links (
  id SERIAL PRIMARY KEY,
  section_key TEXT NOT NULL CHECK (section_key IN ('quick', 'resource')),
  label TEXT NOT NULL,
  href TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'Home', '/', 1, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'Home');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'About', '/about', 2, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'About');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'Services', '/services', 3, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'Services');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'Tenders', '/tenders', 4, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'Tenders');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'Career', '/career', 5, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'Career');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'quick', 'Contact', '/contact', 6, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'quick' AND label = 'Contact');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'resource', 'Circulars', '/circulars', 1, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'resource' AND label = 'Circulars');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'resource', 'Empanelled Vendors', '/empanelled-vendors', 2, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'resource' AND label = 'Empanelled Vendors');

INSERT INTO footer_links (section_key, label, href, display_order, is_active)
SELECT 'resource', 'Portal Login', '/login', 3, TRUE
WHERE NOT EXISTS (SELECT 1 FROM footer_links WHERE section_key = 'resource' AND label = 'Portal Login');

CREATE TABLE IF NOT EXISTS workflow_users (
  user_id TEXT PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('content_editor', 'approver', 'publisher', 'admin')),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO workflow_users (user_id, role, is_active)
SELECT 'editor.demo', 'content_editor', TRUE
WHERE NOT EXISTS (SELECT 1 FROM workflow_users WHERE user_id = 'editor.demo');

INSERT INTO workflow_users (user_id, role, is_active)
SELECT 'approver.demo', 'approver', TRUE
WHERE NOT EXISTS (SELECT 1 FROM workflow_users WHERE user_id = 'approver.demo');

INSERT INTO workflow_users (user_id, role, is_active)
SELECT 'publisher.demo', 'publisher', TRUE
WHERE NOT EXISTS (SELECT 1 FROM workflow_users WHERE user_id = 'publisher.demo');

INSERT INTO workflow_users (user_id, role, is_active)
SELECT 'admin.demo', 'admin', TRUE
WHERE NOT EXISTS (SELECT 1 FROM workflow_users WHERE user_id = 'admin.demo');

CREATE TABLE IF NOT EXISTS home_track_change_requests (
  id SERIAL PRIMARY KEY,
  target_track_id INT REFERENCES home_key_tracks(id) ON DELETE SET NULL,
  action_type TEXT NOT NULL CHECK (action_type IN ('create', 'update', 'deactivate')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  href TEXT NOT NULL,
  icon_key TEXT NOT NULL CHECK (icon_key IN ('building', 'globe', 'cloud', 'file')),
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  reason TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  requested_by TEXT NOT NULL,
  approved_by TEXT,
  requested_at TIMESTAMP NOT NULL DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  review_note TEXT
);

CREATE TABLE IF NOT EXISTS workflow_audit_logs (
  id SERIAL PRIMARY KEY,
  actor_user_id TEXT NOT NULL,
  actor_role TEXT NOT NULL CHECK (actor_role IN ('content_editor', 'approver', 'publisher', 'admin')),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id INT NOT NULL,
  details TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS headquarter_personnel (
  id SERIAL PRIMARY KEY,
  serial_no INT NOT NULL,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  extension_ip TEXT NOT NULL,
  email TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INT NOT NULL DEFAULT 999,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE headquarter_personnel
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE headquarter_personnel
ADD COLUMN IF NOT EXISTS sort_order INT NOT NULL DEFAULT 999;

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 1, 'Shri Alok Tiwari', 'Managing Director', '01126105291', '69001', 'mdnicsi@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 1 AND name = 'Shri Alok Tiwari');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 2, 'Shri Jitender Kumar', 'Chief General Manager', '01122900582', '69082', 'kundalji@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 2 AND name = 'Shri Jitender Kumar');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 3, 'Shri Naveen Agrawal', 'Chief General Manager', '01122900547', '69047', 'srgm-na@nicsi.nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 3 AND name = 'Shri Naveen Agrawal');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 4, 'Md. Ziya Ur Rehman Badar', 'Sr. General Manager', '01122900553', '69053', 'mzr.badar@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 4 AND name = 'Md. Ziya Ur Rehman Badar');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 5, 'Shri Rahul Sharma', 'General Manager', '01122900586', '69086', 'rahul.sh@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 5 AND name = 'Shri Rahul Sharma');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 6, 'Shri Prasanna Pandey', 'General Manager', '01122900524', '69024', 'prasanna.pandey@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 6 AND name = 'Shri Prasanna Pandey');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 7, 'Shri Bhupendra Kumar Sharma', 'General Manager', '01122900510', '69010', 'bks@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 7 AND name = 'Shri Bhupendra Kumar Sharma');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 8, 'Shri Gyan Prakash Singh', 'General Manager', '01122900506', '69006', 'gm@nicsi.nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 8 AND name = 'Shri Gyan Prakash Singh');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 9, 'Shri Ramdatt Upadhyay', 'General Manager', '01122900512', '69012', 'upadhyay.rd@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 9 AND name = 'Shri Ramdatt Upadhyay');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 10, 'Shri Atul Rastogi', 'General Manager', '01122900511', '69011', 'atul.r@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 10 AND name = 'Shri Atul Rastogi');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 11, 'Shri Lalit Kumar Bhatia', 'General Manager', '01122900516', '69016', 'lalit.b@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 11 AND name = 'Shri Lalit Kumar Bhatia');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 12, 'Shri Ajay Kumar Gupta', 'General Manager', '01122900556', '69056', 'ajayg@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 12 AND name = 'Shri Ajay Kumar Gupta');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 13, 'Shri Shailendra Saxena', 'Deputy General Manager', '01122900562', '69062', 'shailendra.saxena@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 13 AND name = 'Shri Shailendra Saxena');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 14, 'Shri Neeraj Chawla', 'Deputy General Manager', '01122900507', '69007', 'neerajc@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 14 AND name = 'Shri Neeraj Chawla');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 15, 'Shri Kumar Jyoti', 'Senior Manager', '01122900517', '69017', 'kumar.jyoti@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 15 AND name = 'Shri Kumar Jyoti');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 16, 'Shri Vikas Dixit', 'Manager', '01122900503', '69003', 'vikas.dixit@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 16 AND name = 'Shri Vikas Dixit');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 17, 'Shree Jeevan Nath', 'Assistant Manager', '01122900584', '69084', 'jeevan.nath@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 17 AND name = 'Shree Jeevan Nath');

INSERT INTO headquarter_personnel (serial_no, name, designation, phone_number, extension_ip, email)
SELECT 18, 'Shri Mahesh Kumar', 'Company Secretary', '01122900522', '69022', 'nicsi-cs@nic.in'
WHERE NOT EXISTS (SELECT 1 FROM headquarter_personnel WHERE serial_no = 18 AND name = 'Shri Mahesh Kumar');

UPDATE headquarter_personnel
SET sort_order = serial_no
WHERE sort_order = 999;
